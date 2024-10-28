import React, { useState } from 'react';
import './Login.scss';
import { Link } from 'react-router-dom';
import { Box, Text, Button, Input } from "@chakra-ui/react";
import { PasswordInput } from '../../components/ui/password-input';

const Login = () => {

  return (
    <div className="login">
        <div className="background">
            <Box className="loginContainer" w={{base: "19rem", md: "25rem", lg: "25rem"}} data-state="open" 
            _open={{ 
                animationName: "fade-in, slide-from-top",
                animationDuration: "300ms",
                animationTimingFunction: "ease-out"
            }}>
                <img src={process.env.PUBLIC_URL + "/assets/images/logo1.png"} alt="" className="logo" />
                <Text className="title" fontSize={{ base: '1.5rem', md: '2rem', lg: '2rem' }}>Sign in to Petspital</Text>
                <div className="inputContainer">
                    <Text className="desc">Username</Text>
                    <Input className='input' placeholder='Input ID' />
                </div>
                <div className="inputContainer">
                    <Text className="desc">Password</Text>
                    <PasswordInput className='input' placeholder='Input Password' />
                </div>
                <Button className="loginButton" colorScheme='gray' variant='solid'
                h={{ base: '50px', md: '53px', lg: '55px' }}
                w={{ base: '200px', md: '225px', lg: '250px' }}
                fontSize={{ base: '16px', md: '18px', lg: '20px' }}
                margin='4px'>Login</Button>
                <div className="signUpContainer">
                    <Text fontSize={{ base: '0.9rem', md: '1.1rem', lg: '1.1rem' }}>Are you new in here?</Text>
                    <Link to="/SignUp" style={{ textDecoration: "none" }} className="signUp">
                        <Text fontSize={{ base: '0.9rem', md: '1.1rem', lg: '1.1rem' }}>Create Account</Text>
                    </Link>
                </div>
            </Box>
        </div>
    </div>
  )
}

export default Login