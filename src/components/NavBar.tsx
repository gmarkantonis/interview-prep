import React from 'react';
import {Box, HStack, IconButton, Heading, LightMode, Spacer, useColorMode} from "@chakra-ui/react"
import {MoonIcon, SunIcon} from "@chakra-ui/icons";

function NavBar() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <>
      <HStack h="60px" bg="blue.500" color="white" p={5} position="fixed" zIndex="99" w="100%" alignItems="center">
        <Heading size="lg">Interview Prep</Heading>
        <Spacer />
        <LightMode>
          <IconButton 
            colorScheme="red" 
            onClick={toggleColorMode}
            aria-label="Light/dark mode"
            icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          />
        </LightMode>
      </HStack>
      <Box h="60px"/>
    </>
  );
}

export default NavBar;
