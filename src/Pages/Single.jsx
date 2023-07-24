import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";

const Single = () => {
  const data = JSON.parse(localStorage.getItem("fastor-single"));
  console.log(data);
  
  return (
    <Box padding={"20px"} position="relative">
      {/* Superimposed Image */}
      <Box
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        zIndex="1"
      >
        {/* <Image src="../Images/Fastor Logo.png" alt="Fastor" width="100px" /> */}
        <Image src="https://images.crunchbase.com/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/nceirg4yszretupes6ea" alt="Fastor"  width="100px" />

      </Box>

      {/* Data Image */}
      <Image src={data.images[0].url} alt="Image" />

      {/* Restaurant Name */}
      <Text fontSize='2xl' as='b'>{data.restaurant_name}</Text>
    </Box>
  );
};

export default Single;
