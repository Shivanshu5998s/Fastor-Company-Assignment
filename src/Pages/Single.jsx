import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";

const Single = () => {
  const data = JSON.parse(localStorage.getItem("fastor-single"));
  console.log(data);
  return (

    <Box padding={"20px"}>
      <Text fontSize='2xl' as='b'>{data.restaurant_name}</Text>
      <Image src={data.images[0].url} alt="Image" />
      <img src="../Images/Fastor Logo.png" alt="Fastor" />
    </Box>
  );
};

export default Single;
