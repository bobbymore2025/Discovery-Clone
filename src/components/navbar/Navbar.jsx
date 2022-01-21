import React from "react";
import {Flex,Box,Button,Spacer} from "@chakra-ui/react";
import { Option } from "./Option";
export const Navbar=()=>{
    return <>
    <Flex bg="gray.900" h="50px" justi>
    <Box p='2'>
    <Option /> 
  </Box>
  <Spacer />
  <Box>
    <Button colorScheme='teal' mr='4'>
      Sign Up
    </Button>
    
    <Button color="white" bg='blue.600'>sign in</Button>
  </Box>
</Flex>
    
    </>
}