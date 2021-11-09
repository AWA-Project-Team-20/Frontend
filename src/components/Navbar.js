import React from 'react'
import styled from 'styled-components'
import { FaPizzaSlice } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Nav = styled.nav`
    display: flex;
    position: sticky;
    background: rgb(2,0,36);
    background: radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(0,212,255,1) 0%, rgba(0,0,0,1) 100%);
    height: 80px;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    top: 0;
    z-index: 1;
`;

const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    width: 100%;
    padding: 0 24px;
    max-width: 1200px;
`;

const NavLogo = styled(Link)`
    display: flex;
    color: white;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 24px;
    align-items: center;
    margin-left: 25px;
    font-weight: bold;
    text-decoration: none;
`;

const Logo = styled(FaPizzaSlice)`
    margin-right: 10px;
`;

const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
`;

const NavItem = styled.li`
    height: 80px;
`;

const NavLinks = styled(Link)`
    display: flex;
    color: white;
    align-items: center;
    text-decoration: none;
    padding: 0 16px;
    height: 100%;
    cursor: pointer;
    font-family: Verdana, Geneva, sans-serif;
    letter-spacing: 1px;
    font-variant: small-caps;
    font-style: italic;

    &:hover {
        transition: all 0.2s ease-in-out;
        color: black;
        font-size: 150%;
    }
`;

const SignButtonContainer = styled.nav`
    display: flex;
    align-items: center;
`;

const SignButton = styled.button`
    border-radius: 50px;
    background: rgb(0, 157, 224);
    white-space: nowrap;
    padding: 10px 22px;
    color: black;
    font-size: 15px;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: white;
    }
`;

const Navbar = () => {
    return (
        <Nav>
            <NavbarContainer>
                <NavLogo to="/" >
                    <Logo />
                    FoodApp
                </NavLogo>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="/restaurants">Restaurants</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="/about">About Us</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="/account">Account</NavLinks>
                    </NavItem>
                </NavMenu>
                <SignButtonContainer>
                    <SignButton>Sign In/Up</SignButton>
                </SignButtonContainer>
            </NavbarContainer>
    </Nav>
    )
}

export default Navbar