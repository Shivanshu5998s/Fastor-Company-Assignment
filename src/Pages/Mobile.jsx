import { Box, Button, Input, Text } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useToast } from '@chakra-ui/react'

const Mobile = () => {
  const [mobile, setMobile] = useState("");
  const nav = useNavigate();
  const toast = useToast()

  const handleSubmit = () => {
    // console.log(mobile)
    toast({
      title: 'Account created.',
      description: "Your OTP is  123456",
      status: 'success',
      duration: 4000,
      isClosable: true,
    })
    nav('/otp')
  }
  return (
    <Box>
      <Box paddingTop={"10%"} >
        <Text fontSize='2xl' as='b' >Enter Your Mobile Number</Text>
        <Text color='grey'>We will send you the 6 digits verification code </Text>
      </Box>
      <Box textAlign="center" paddingTop={"30px"}>
        <Input size='md' width={"40%"} placeholder="Enter your Mobile Number" type={"number"} onChange={(e) => setMobile(e.target.value)} />
        <Box paddingTop={"30px"}>
          <Button background={'#ff7878'} color="white" onClick={handleSubmit}>Send Code</Button>
        </Box>
      </Box>
    </Box>
  )
}

export default Mobile