import React, { useState, useEffect } from 'react';
import './Login.scss';
import { Link, useNavigate } from 'react-router-dom';
import { Box, Text, Button, Input } from "@chakra-ui/react";
import { PasswordInput } from '../../components/ui/password-input';
import { toaster } from "../../components/ui/toaster";

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const user = sessionStorage.getItem('user');
        
        if (user) {
            const parsedUser = JSON.parse(user);
            if (parsedUser.role === 'PETOWNER') {
                navigate('/user/petowner');
            } else if (parsedUser.role === 'DOCTOR') {
                navigate('/user/doctor');
            } else if (parsedUser.role === 'ADMIN') {
                navigate('/user/admin');
            }
        }
    }, [navigate]);

    const handleLogin = async () => {
        try {
            console.log('Email:', email); 
            console.log('Password:', password);
            console.log(JSON.stringify({ email, password }));
            const response = await fetch('http://localhost:8080/loginProc', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            if (response.status === 401) {
                toaster.create({
                    title: "Login failed.",
                    description: "Invalid email or password.",
                    status: "error",
                    duration: 3000,
                    isClosable: true
                });
                return;
            }

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const user = await response.json();

            if (user) {
                sessionStorage.setItem('user', JSON.stringify(user));
                toaster.create({
                    title: "Login successful.",
                    description: "Welcome to petspital, " + user.username + "!",
                    status: "success",
                    duration: 3000,
                    isClosable: true
                });
                navigate('/user/petowner');
            } else {
                toaster.create({
                    title: "Login failed.",
                    description: "Invalid email or password.",
                    status: "error",
                    duration: 3000,
                    isClosable: true
                });
            }
        } catch (error) {
            console.error("Error fetching user data:", error);
            toaster.create({
                title: "An error occurred.",
                description: "Unable to log in. Please try again later.",
                status: "error",
                duration: 3000,
                isClosable: true
            });
        }
    };

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
                        <Text className="desc">Email</Text>
                        <Input className='input' placeholder='Input Email' onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="inputContainer">
                        <Text className="desc">Password</Text>
                        <PasswordInput className='input' placeholder='Input Password' onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <Button className="loginButton" colorScheme='gray' variant='solid'
                    h={{ base: '50px', md: '53px', lg: '55px' }}
                    w={{ base: '200px', md: '225px', lg: '250px' }}
                    fontSize={{ base: '16px', md: '18px', lg: '20px' }}
                    margin='4px'
                    onClick={handleLogin}>Login</Button>
                    <div className="signUpContainer">
                        <Text fontSize={{ base: '0.9rem', md: '1.1rem', lg: '1.1rem' }}>Are you new in here?</Text>
                        <Link to="/SignUp" style={{ textDecoration: "none" }} className="signUp">
                            <Text fontSize={{ base: '0.9rem', md: '1.1rem', lg: '1.1rem' }}>Create Account</Text>
                        </Link>
                    </div>
                </Box>
            </div>
        </div>
    );
}

export default Login