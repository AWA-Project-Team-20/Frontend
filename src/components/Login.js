import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
    width: 100%;
    height: 550px;
    /* background-color: lightgray; */
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: end;
`;

const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 160px;
    border-radius: 19px;
    box-shadow: 0 0 5px rgba(15, 15, 15, 0.28);
    position: relative;
    overflow: hidden;
    
    
    /* justify-content: center; */
    align-items: center;
    width: 500px;
    height: 500px;
    background-color: white;
    font-size: 16px;
    color: black;
`;

const Header = styled.h2`
    font-size: 30px;
    font-weight: 600;
    line-height: 1.24;
`;

const BoxContainer = styled.div`
    width: 100%auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
    background-color: lightyellow;
`;

const FormContainer = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: orange;
    box-shadow: 0px 0px 2.5px rgba(15, 15, 15, 0.19);
`;

const Input = styled.input`
    width: 100%;
    height: 42px;
    outline: none;
    border: 1px solid rgba(200, 200, 200, 0.0.3);
    padding: 0px 10px;
    border-bottom: 1.4px solid transparent;
    transition: all 200ms ease-in-out;
    font-size: 12px;

    &::placeholder {
        color: rgba(200, 200, 200, 1);
    }

    &:not(:last-of-type) {
        border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
    }

    &:focus {
        outline: none;
        border-bottom: 2px solid rgb(241, 196, 15);
    }
`;

const SubmitButton = styled.button`
margin-top: 10px;
    width: 100%;
    padding: 11px 40%;
    color: white;
    font-size: 15px;
    font-weight: 600;
    border: none;
    border-radius: 100px 100px 100px 100px;
    cursor: pointer;
    transition: all, 240ms ease-in-out;
    background: rgb(241, 196, 15);
    background: linear-gradient(58deg, rgba(241, 196, 15, 1) 20%, rgba(243, 172, 18, 1) 100%);

    &:hover {
        filter: brightness(1.03);
    }
`;

const MutedLink = styled(Link)`
    font-size: 12px;
    color: rgba(200, 200, 200, 0.8);
    font-weight: 500;
    text-decoration: none;
`;

const BoldLink = styled(Link)`
    font-size: 12px;
    color: rgb(241, 196, 15);
    font-weight: 500;
    text-decoration: none;
`;


const Login = () => {
    return (
        <Container>
        <LoginContainer>
            <Header>Login</Header>
            <BoxContainer>
                <FormContainer>
                    <Input type="email" placeholder="Email" />
                    <Input type="password" placeholder="Password" />
                </FormContainer>
                <MutedLink to="/">Forgot your password?</MutedLink>
                <SubmitButton type="submit">Signin</SubmitButton>
                <MutedLink to="/">Don't have an account? <BoldLink to="/">Signup</BoldLink></MutedLink>
            </BoxContainer>

            
        </LoginContainer>
        </Container>
    )
}

export default Login
