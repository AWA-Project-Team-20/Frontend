import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
// import restaurantService from '../services/restaurants'

const ManagerPageContainer = styled.div`
    display: flex;
    flex-flow: column;
    padding-top: 50px;
    align-items: center;
`;

const Header = styled.h1`
    text-align: center;
    width: 90%;
    border-bottom: 2px solid lightgray;
    padding-bottom: 15px;
`;

const Info = styled.div`
    font-size: 20px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    margin-top: 5px;
    margin-bottom: 20px;
`;

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    width: 80%;
    align-items: center;
    margin-bottom: 20px;
`;

const TextInput = styled.input`
    width: 600px;
    height: 42px;
    padding: 10px 10px;
    margin-bottom: 10px;
    border-radius: 10px;
    border: 2px inset black;
    transition: all 200ms ease-in-out;
    font-size: 18px;

    &::placeholder {
        color: lightgray;
    }

    &:focus {
        border-bottom: 5px solid rgb(0, 157, 224);
    }
`;

const TimeContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 625px;
    margin-top: 10px;
`;

const TimeLabel = styled.label`
    display: flex;
    justify-content: center;
    font-size: 20px;
`;

const TimeInputWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    font-size: 30px;
    font-weight: 700;
`;

const TimeInput = styled.input`
    width: 30%;
    padding: 10px 10px;
    margin-bottom: 10px;
    border-radius: 10px;
    border: 2px inset black;
    font-size: 20px;
`;

const DropdownContainer = styled.div`
    display: flex;
    width: 625px;
    justify-content: space-between;
    margin-top: 10px;
`;

const DropdownLabel = styled.label`
    font-size: 20px;
    margin-left: 5px;
    padding-bottom: 5px;
`;

const DropdownWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const Dropdown = styled.select`
    width: 300px;
    height: 60px;
    padding: 10px 10px;
    margin-bottom: 10px;
    border-radius: 10px;
    border: 2px inset black;
    transition: all 200ms ease-in-out;
    font-size: 18px;
    cursor: pointer;
`;

const DropdownItem = styled.option`

`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 625px;
`;

const ClearButton = styled.button`
    width: 300px;
    border-radius: 100px;
    background: rgb(224, 0, 0);
    white-space: nowrap;
    padding: 15px 0px;
    margin-top: 5px;
    color: white;
    font-size: 16px;
    font-weight: 700;
    border: none; 
    cursor: pointer;
    transition: all, 240ms ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        filter: brightness(1.5);
    }

`;

const SubmitButton = styled.button`
    width: 300px;
    border-radius: 100px;
    background: rgb(0, 157, 224);
    white-space: nowrap;
    padding: 15px 0px;
    margin-top: 5px;
    color: white;
    font-size: 16px;
    font-weight: 700;
    border: none; 
    cursor: pointer;
    transition: all, 240ms ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        filter: brightness(1.2);
    }
`;

const ManagerPage = ({ setNavLinks, restaurants, setRestaurants }) => {
    const [ showForm, setShowForm ] = useState(true)
    const [ name, setName ] = useState("")
    const [ location, setLocation ] = useState("")
    const [ imageURL, setImageURL ] = useState("")
    const [ operatingHours, setOperatingHours ] = useState("")
    const [ operatingHours2, setOperatingHours2 ] = useState("")
    const [ type, setType ] = useState("Buffet")
    const [ priceLevel, setPriceLevel ] = useState("€")

    const typeOptions = ["Buffet", "Fast food", "Fast casual", "Casual dining", "Fine dining"]
    const pricelvlOptions = ["€", "€€", "€€€", "€€€€"]

    //If the restaurant manager has already created a restaurant, show the existing restaurant instead of form
    // setShowForm(false)

    useEffect(() => {
        setNavLinks([
            {
                "path": "/manager/restaurant"
            },
            {
              "path": "/manager/restaurant",
              "name": "My restaurant"
            },
            {
              "path": "/manager/orders",
              "name": "Orders"
            }
        ])
    }, [setNavLinks])

    const clearForm = () => {
        setName("")
        setLocation("")
        setImageURL("")
        setOperatingHours("")
        setOperatingHours2("")
        setType("")
        setPriceLevel("")
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const newRestaurant = {
            name: name,
            location: location,
            img: imageURL,
            operatingHours: `${operatingHours} – ${operatingHours2}`,
            type: type,
            pricelvl: priceLevel
        }

        console.log(newRestaurant)
        clearForm()

        // restaurantService
        // .create(newRestaurant)
        // .then(returnedRestaurant => {
        //     setRestaurants(restaurants.concat(returnedRestaurant))
        //     clearForm()
        //     setShowForm(false)
        // })
        // .catch(err => console.log(err))
    }
    
    return (
        <ManagerPageContainer>
            <Header>Hello manager!</Header>
            {showForm &&
                <FormContainer onSubmit={handleSubmit} >
                    <Info>Fill out the form and reach new customers!</Info>
                    <TextInput type="text" placeholder="Restaurant name" required={true} value={name} onChange={(e) => setName(e.target.value)} />
                    <TextInput type="text" placeholder="Location" required={true} value={location} onChange={(e) => setLocation(e.target.value)} />
                    <TextInput type="text" placeholder="Restaurant image (URL)" required={true} value={imageURL} onChange={(e) => setImageURL(e.target.value)} />
                    <TimeContainer>
                        <TimeLabel> Operating hours: </TimeLabel>
                        <TimeInputWrapper>
                            <TimeInput type="time" required={true} value={operatingHours} onChange={(e) => setOperatingHours(e.target.value)} />
                            <TimeInput type="time" required={true} value={operatingHours2} onChange={(e) => setOperatingHours2(e.target.value)} />
                        </TimeInputWrapper>
                    </TimeContainer>
                    <DropdownContainer>
                        <DropdownWrapper>
                            <DropdownLabel>Restaurant type:</DropdownLabel>
                            <Dropdown value={type} onChange={(e) => setType(e.target.value)} >
                                {typeOptions.map((o, idx) =>
                                    <DropdownItem key={idx} value={o} >{o}</DropdownItem>    
                                )}
                            </Dropdown>
                        </DropdownWrapper>
                        <DropdownWrapper>
                            <DropdownLabel>Price level:</DropdownLabel>
                            <Dropdown value={priceLevel} onChange={(e) => setPriceLevel(e.target.value)} >
                                {pricelvlOptions.map((o, idx) =>
                                    <DropdownItem key={idx} value={o} >{o}</DropdownItem> 
                                )}
                            </Dropdown>
                        </DropdownWrapper>
                    </DropdownContainer>
                    <ButtonContainer>
                        <ClearButton type="reset" onClick={clearForm} >Clear form</ClearButton>
                        <SubmitButton type="submit" >Create a restaurant</SubmitButton>
                    </ButtonContainer>
                </FormContainer>
            }
        </ManagerPageContainer>

    )
}

export default ManagerPage
