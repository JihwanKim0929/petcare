import React, { Fragment, useState, useEffect } from 'react';
import './UserNavbar.scss';
import { Link, Outlet, useLocation } from "react-router-dom";
import { Show, IconButton, Text, Box, useBreakpointValue } from "@chakra-ui/react";
import { IoMenu } from "react-icons/io5";
import { BiHome } from "react-icons/bi";
import { BiSearchAlt2 } from "react-icons/bi";
import { BiSolidReport } from "react-icons/bi";
import { FaRegHospital } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa6";
import { BiUserCircle } from "react-icons/bi";
import { BiCog } from "react-icons/bi";
import SidebarCategory from '../sidebarCategory/SidebarCategory';
import { FaNotesMedical } from "react-icons/fa6";
import { Button } from "../ui/button";
import {
  DrawerActionTrigger,
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerRoot,
  DrawerTrigger,
} from "../ui/drawer";
import { Avatar } from "../ui/avatar";

const UserNavbar = () => {

  const [userType, setUserType] = useState('petOwner');
  const location = useLocation();
  const isBelowMd = useBreakpointValue({ base: true, md: false });

  useEffect(() => {
    if (location.pathname.includes('/user/petowner')) {
      setUserType('petOwner');
    } else if (location.pathname.includes('/user/doctor')) {
      setUserType('doctor');
    }
  }, [location]);

  const petOwnerMenuData = [{
    title: 'Home', 
    icon: BiHome,
    linkTo: '/user/petowner'
  }, {
    title: 'Diagnosis', 
    icon: BiSearchAlt2,
    linkTo: '/user/petowner/diagnosis'
  }, {
    title: 'Records', 
    icon: BiSolidReport,
    linkTo: '/user/petowner/records'
  }, {
    title: 'Hospital', 
    icon: FaRegHospital,
    linkTo: '/user/petowner/hospital'
  }, {
    title: 'Community', 
    icon: FaUsers,
    linkTo: '/user/petowner/community'
  }, {
    title: 'Profile', 
    icon: BiUserCircle,
    linkTo: '/user/petowner/profile'
  }, {
    title: 'Settings', 
    icon: BiCog,
    linkTo: '/user/petowner/settings'
  }];

  const doctorMenuData = [{
    title: 'Home', 
    icon: BiHome, 
    linkTo: '/user/doctor'
  }, {
    title: 'Appointments', 
    icon: FaNotesMedical, 
    linkTo: '/user/doctor/appointments'
  }, {
    title: 'Community', 
    icon: FaUsers, 
    linkTo: '/user/doctor/community'
  }, {
    title: 'Profile', 
    icon: BiUserCircle, 
    linkTo: '/user/doctor/profile'
  }, {
    title: 'Settings', 
    icon: BiCog, 
    linkTo: '/user/doctor/settings'
  }];

  const menuItems = userType === 'petOwner' ? petOwnerMenuData : doctorMenuData;

  return (
    <Fragment>
      <div className="userNavbar">
        <Show when={isBelowMd}>
          <div className="mobileItems">
            <div className="item">
              <DrawerRoot placement='start'>
                <DrawerTrigger asChild>
                  <IconButton colorScheme='black' variant='ghost' className="mobileMenuButton">
                    <IoMenu />
                  </IconButton>
                </DrawerTrigger>
                <DrawerBackdrop />
                <DrawerContent borderTopRightRadius='0.5rem' borderBottomRightRadius='0.5rem'>
                  <DrawerCloseTrigger />
                  <DrawerHeader borderBottomWidth='1px'>
                    <Box h="60px" display='flex' alignItems='center'>
                      <Avatar name='John Doe' src='https://bit.ly/sage-adebayo' w="60px" h="60px" mt="0.5rem" mr="1rem"/>
                      <Text mt='0.5rem' fontSize='18px' fontWeight='600'>John Doe</Text>
                    </Box>
                  </DrawerHeader>
                  <DrawerBody>
                    <ul style={{listStyle: 'none'}}>
                      {menuItems.map((item, index) => (
                        <DrawerActionTrigger asChild>
                          <div>
                            <SidebarCategory key={index} CategoryIcon={item.icon} categoryName={item.title} categoryLink={item.linkTo} />
                          </div>
                        </DrawerActionTrigger>
                      ))}
                    </ul>
                  </DrawerBody>
                  <DrawerFooter>
                    <Button className="signOutButton" colorScheme='gray' variant='solid'>Sign out</Button>
                  </DrawerFooter>
                </DrawerContent>
              </DrawerRoot>
            </div>
          </div>
        </Show>

        <Show when={isBelowMd}>
          <Link to="/" style={{ textDecoration: "none" }} className="mobileLogoContainer">
            <img src={process.env.PUBLIC_URL + "/assets/images/logo1.png"} alt="LOGO" className="logo" />
            <span className="logoTitle">Petspital</span>
          </Link>
        </Show>

        <Show when={isBelowMd}><div /></Show>

        <Box hideBelow='md'>
          <Link to="/" style={{ textDecoration: "none" }} className="desktopLogoContainer">
            <img src={process.env.PUBLIC_URL + "/assets/images/logo1.png"} alt="LOGO" className="logo" />
            <span className="logoTitle">Petspital</span>
          </Link>
        </Box>

        <Box hideBelow='md'>
          <div className="desktopItems">
          <div className="item">
              <Link to="/about" style={{ textDecoration: "none" }}>
                <div className="abtPetspital">
                  About
                </div>
              </Link>
            </div>
            <div className="item">
              <Link to="/notifications" style={{ textDecoration: "none" }}>
                <div className="notification">
                  Notification
                </div>
              </Link>
            </div>
            <div className="item">
              <Button className="signOutButton" colorScheme='gray' variant='solid'>Sign out</Button>
            </div>
          </div>
        </Box>
      </div>

      <Outlet />
    </Fragment>
  );
}

export default UserNavbar