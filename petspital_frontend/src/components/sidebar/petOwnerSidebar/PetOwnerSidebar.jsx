import React, { Fragment } from 'react';
import '../Sidebar.scss';
import { Outlet } from "react-router-dom";
import { Show, Box, Center, Text, useBreakpointValue } from '@chakra-ui/react';
import { BiHome } from "react-icons/bi";
import { BiSearchAlt2 } from "react-icons/bi";
import { BiSolidReport } from "react-icons/bi";
import { FaRegHospital } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa6";
import { BiUserCircle } from "react-icons/bi";
import { BiCog } from "react-icons/bi";
import SidebarCategory from '../../sidebarCategory/SidebarCategory';
import { Avatar } from "../../ui/avatar";

const PetOwnerSidebar = () => {

  const isMdOrMore = useBreakpointValue({ base: false, md: true });

  return (
    <Fragment>
      <div className="body">
        <Show when={isMdOrMore}>
          <Box className="sidebar" hideBelow='md'>
            <ul className="sidebarComponents">
              <Center flexDirection='column' borderBottom="1.5px solid lightgray" marginLeft='0.75rem' marginRight='0.75rem' marginTop='1rem'>
                <Avatar name="John Doe" src="https://bit.ly/sage-adebayo" w='125px' h='125px' />
                <Text mt='0.5rem' mb='0.5rem' fontWeight='bold' fontSize='18px'>John Doe</Text>
              </Center>
              <br />
              <SidebarCategory CategoryIcon={BiHome} categoryName='Home' categoryLink='/user/petowner'/>
              <SidebarCategory CategoryIcon={BiSearchAlt2} categoryName='Diagnosis' categoryLink='/user/petowner/diagnosis'/>
              <SidebarCategory CategoryIcon={BiSolidReport} categoryName='Records' categoryLink='/user/petowner/records'/>
              <SidebarCategory CategoryIcon={FaRegHospital} categoryName='Hospital' categoryLink='/user/petowner/hospital'/>
              <SidebarCategory CategoryIcon={FaUsers} categoryName='Community' categoryLink='/user/petowner/community'/>
              <SidebarCategory CategoryIcon={BiUserCircle} categoryName='Profile' categoryLink='/user/petowner/profile'/>
              <SidebarCategory CategoryIcon={BiCog} categoryName='Settings' categoryLink='/user/petowner/settings'/>
            </ul>
          </Box>
        </Show>
        <div className="background">
          <Outlet />
        </div>
      </div>
    </Fragment>
  );
}

export default PetOwnerSidebar