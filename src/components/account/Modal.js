import React, { useState, useRef } from "react";
import styled from "styled-components";
import { MdClose } from 'react-icons/md'
import { useSpring, animated } from 'react-spring'
import SignInForm from "./SignInForm";
import SignUpForm  from "./SignUpForm";

const Background = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    position: fixed;
`;

const FormContainer = styled.div`
    width: 480px;
    height: 580px;
    background: white;
    color: black;
    position: relative;
    z-index: 10;
    border-radius: 10px;
`;

const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1.8;    
`;

const CloseModalButton = styled(MdClose)`
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
    width: 32px;
    height: 32px;
`;

const Modal = ({ showModal, setShowModal }) => {
    const modalRef = useRef()
    const [showSignUp, setShowSignUp] = useState(false)

    const animation = useSpring({
        config: {
            duration: 350
        },
        opacity: showModal ? 1 : 0,
        transform: showModal ? `translateY(0%)` : `translateY(50%)`
    })

    const closeModal = (e) => {
        if(modalRef.current === e.target) {
            setShowModal(false)
            setShowSignUp(false)
        }
    }

    return (
        <>
            {showModal ? (
                <Background ref={modalRef} onClick={closeModal}>
                    <animated.div style={animation}>
                    <FormContainer>
                        <ModalContent>
                           {showSignUp 
                           ? <SignUpForm showSignUp={showSignUp} setShowSignUp={setShowSignUp} /> 
                           : <SignInForm showSignUp={showSignUp} setShowSignUp={setShowSignUp} /> }
                       </ModalContent>
                       <CloseModalButton onClick={() => setShowModal(false)} />
                    </FormContainer>
                    </animated.div>
                </Background> 
            ) :null}
            
        </>
    )
}

export default Modal
