import {Flex,Box,Spacer, Image,Input,InputGroup,Heading,Text, Center, Button,Container} from "@chakra-ui/react";
import {Link} from "react-router-dom"
export const Signin= () => {

    return (
         <>
        
       
            <Flex direction="column" bg="gray.800" m={'50px'} >
            <Center>
             <Container maxW='300' >
             <Box gap="10px" alignContent={"center"}>
                <Text color="white"   fontSize='3xl'>Sign In Now </Text>
                <Text>Save your preferences & discover great recommendations</Text>
                 <InputGroup>
                    <Input border="none" color="white" placeholder="mobile number" w={'320px'} />
                 </InputGroup>
                <Link to="/otp"><Button bg="blue.500" color="white">Sign In </Button></Link>
          
                </Box>
                </Container>
                </Center>
                </Flex>
                
               
        </>
    );  
};