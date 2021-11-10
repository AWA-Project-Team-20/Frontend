import React from "react";
import styled from "styled-components";

const BoxContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Header = styled.h3`
  margin: 0;
  font-size: 28px;

`;

const Info = styled.p`
  font-size: 22px;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  align-items: center;
  box-shadow: 0px 3px 12.5px rgba(15, 15, 15, 0.19);
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  height: 42px;
  padding: 10px 10px;
  border-radius: 10px;
  transition: all 200ms ease-in-out;
  font-size: 18px;

  &::placeholder {
    color: lightgray;
  }

  &:focus {
    border-bottom: 5px solid rgb(0, 157, 224);
  }
`;

const SubmitButton = styled.button`
  width: 80%;
  border-radius: 100px;
  background: rgb(0, 157, 224);
  white-space: nowrap;
  padding: 15px 22px;
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

const SignUpContainer = styled.div`
  display: flex;
  width: 90%;
  justify-content: center;
  border-top: 1px solid lightgray;
  margin-top: 15px;

  h2 {
    font-size: 16px;
    color: rgb(200, 200, 200);
  }

  button {
    font-size: 11px;
    color: rgb(0, 157, 224);
    font-weight: 500;
    margin-left: 5px;
    border: none;
    background-color: white;
    cursor: pointer;    
  }
`;

const SignUpForm = ({ showSignUp, setShowSignUp }) => {
  return (
    <BoxContainer>
      <HeaderContainer>
        <Header>Create an account</Header>
        <Info>Please sign-up to continue</Info>
      </HeaderContainer>
      <FormContainer>
        <Input type="email" placeholder="Email" required />
        <Input type="password" placeholder="Password" required />
        <Input type="password" placeholder="Confirm Password" required />
      </FormContainer>
      <SubmitButton type="submit">Sign Up</SubmitButton>
      <SignUpContainer>
        <h2>Already have an account?</h2>
        <button onClick={() => setShowSignUp(!showSignUp)}>Sign In</button>
      </SignUpContainer>
    </BoxContainer>
  )
}

export default SignUpForm
