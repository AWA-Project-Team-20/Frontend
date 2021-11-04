import React from 'react'
import styled from 'styled-components'
// import {FaBars} from 'react-icons/fa'
import { Link as LinkR } from 'react-router-dom'
// import { Link as LinkS } from 'react-scroll'

const Nav = styled.nav`
    display: flex;
    position: sticky;
    background: black;
    height: 80px;
    justify-content: center;
    align-items: center;
    font-size: 16px;
`;

const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    width: 100%;
    padding: 0 24px;
    max-width: 1200px;
`;

const NavLogo = styled(LinkR)`
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

const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
`;

const NavItem = styled.li`
    height: 80px;
`;

const NavLinks = styled(LinkR)`
    display: flex;
    color: white;
    align-items: center;
    text-decoration: none;
    padding: 0 16px;
    height: 100%;
    cursor: pointer;
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
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/" >FoodApp</NavLogo>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="/restaurants">Restaurants</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/about">About</NavLinks>
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
        </>
    )
}

export default Navbar
