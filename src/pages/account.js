import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import orderService from '../services/orders'
import { UserContext } from '../contexts/UserContext';

const AccountPageContainer = styled.div`
    display: flex;
    flex-flow: column;
    padding-top: 50px;
    align-items: center;
    min-height: 100vh;
`;

const CurrentOrderHeader = styled.h1`
    text-align: center;
    width: 90%;
    border-bottom: 2px solid lightgray;
    padding-bottom: 15px;
`;

const HistoryHeader = styled.h1`
    text-align: center;
    width: 90%;
    border-bottom: 2px solid lightgray;
    padding-bottom: 15px;
    margin-top: 100px;
`;

const OrderContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    align-items: center;
    justify-content: center;
`;

const OrderContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding-bottom: 20px;
`;

const Order = styled.div`
    height: 100%;
    font-size: 18px;
    margin-right: 5px;
`;

const Button = styled.button`
    width: 120px;
    border-radius: 100px;
    background: rgb(0, 157, 224);
    white-space: nowrap;
    padding: 7px 0px;
    margin-left: 5px;
    color: white;
    font-size: 15px;
    font-weight: 700;
    border: none; 
    cursor: pointer;
    transition: all, 240ms ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        filter: brightness(1.2);
    }
`;

const DeliveredButton = styled.button`
    width: 280px;
    border-radius: 100px;
    background: rgb(0, 200, 200);
    white-space: nowrap;
    padding: 7px 0px;
    margin-left: 5px;
    color: white;
    font-size: 15px;
    font-weight: 700;
    border: none; 
    cursor: pointer;
    transition: all, 240ms ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        filter: brightness(1.2);
    }
`;

const Message = styled.div`
    padding: 10px 60px;
    border: 2px inset black;
    border-radius: 10px;
    background-color: rgba(0, 255, 0, 0.3);
    box-shadow: 0 6px 20px rgba(, 255, 0, 0.3);
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 20px;
`;

const AccountPage = () => {
    const [ orders, setOrders ] = useState([])
    const [ showDetails, setShowDetails ] = useState(false)
    const [ orderDetails, setOrderDetails ] = useState([])
    const [ disableButton, setDisableButton ] = useState(false)
    const [ message, setMessage ] = useState(null)
    const { user } = useContext(UserContext)

    useEffect(() => {
        orderService
        .getAll()
        .then(initialOrders => {
            console.log(initialOrders)
          setOrders(initialOrders)
        })
        .catch(error => console.log(error))
    }, []);

    console.log(orders)

    let ordersInProgress = []
    let completedOrders = []
    orders.filter(o => o.status !== "Delivered" ? ordersInProgress.push(o) : completedOrders.push(o));

    const handleDelivered = (order) => {
        const orderObject = { order_id: order.order_id}

        orderService
        .update(orderObject)
        .then(returnedOrder => {
            setMessage("Order delivered!")
            setTimeout(() => {
                setMessage(null)
            }, 5000);
            setOrders(orders.map(o => o.order_id !== returnedOrder.order_id ? o : returnedOrder))
        })
    }

    const handleDetails = (order) => {
        setShowDetails(!showDetails)

        if (showDetails) {
            setDisableButton(true)
            orderService
            .getDetails(order.order_id)
            .then(returnedOrderDetails => {
                setOrderDetails(returnedOrderDetails)
                setDisableButton(false)
            })
        }
    }
    
    return (
        <AccountPageContainer>
            <CurrentOrderHeader>Orders in progress</CurrentOrderHeader>
            {message && <Message>{message}</Message>}
            <OrderContainer>
                {ordersInProgress.map(o =>
                    <OrderContent key={o.order_id} >
                        <Order>{o.order_id} {o.delivery_address} {o.status} {o.total}</Order>
                        <Button onClick={() => handleDetails(o)}>Show details</Button>
                        <DeliveredButton onClick={() => handleDelivered(o)} >Click to mark the order as delivered</DeliveredButton>
                    </OrderContent>  
                )}
            </OrderContainer>
            {showDetails &&
                <OrderContainer>
                    <HistoryHeader>Order details:</HistoryHeader>
                    {orderDetails.map((d, index) => 
                        <div key={index}>{d.name} </div>    
                    )}
                </OrderContainer>
            }
            <HistoryHeader>Order history</HistoryHeader>
            <OrderContainer>
                {completedOrders.map(o =>
                    <OrderContent key={o.order_id} >
                        <Order>{o.delivery_address} {o.date} {o.total}</Order>
                        <Button onClick={() => handleDetails(o)} disabled={disableButton} >Show details</Button>
                    </OrderContent>   
                )}
            </OrderContainer>
        </AccountPageContainer>
    )
}

export default AccountPage
