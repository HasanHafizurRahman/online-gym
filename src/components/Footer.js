import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/logo-2.jpg";
{
  /* <Box mt="80px" bgcolor="#FFF3F4"> */
}
const Footer = () => (
  <Box marginTop="70px" padding="40px 0" bgcolor="#FFF3F4">
    <Box
      width="80%"
      margin="auto"
      display="flex"
      justifyContent="space-between"
      flexWrap="wrap"
      rowGap="30px"
      columnGap="clamp(20px, 30px, 40px)"
    >
      <Box width="clamp(20%, 30%, 40%)">
        <img src={Logo} alt="logo" style={{ width: "40px", height: "40px" }} />
        <Typography variant="h5" fontWeight="bold" mb="30px" color="#3A1212">
          Virtual Fitness Instructor
        </Typography>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat
        </div>
      </Box>

      <Box>
        <Typography variant="h5" fontWeight="bold" mb="30px">
          About Us
        </Typography>
        <Typography mb="30px">Careers</Typography>
        <Typography mb="30px">Our Stores</Typography>
        <Typography mb="30px">Terms & Conditions</Typography>
        <Typography mb="30px">Privacy Policy</Typography>
      </Box>

      <Box>
        <Typography variant="h5" fontWeight="bold" mb="30px">
          Customer Care
        </Typography>
        <Typography mb="30px">Help Center</Typography>
        <Typography mb="30px">Track Your Order</Typography>
        <Typography mb="30px">Corporate & Bulk Purchasing</Typography>
        <Typography mb="30px">Returns & Refunds</Typography>
      </Box>

      <Box width="clamp(20%, 25%, 30%)">
        <Typography variant="h5" fontWeight="bold" mb="30px">
          Contact Us
        </Typography>
        <Typography mb="30px">Baridhara j-block, Dhaka, Bangladesh</Typography>
        <Typography mb="30px" sx={{ wordWrap: "break-word" }}>
          Email: hasanshanto922@gmail.com
        </Typography>
        <Typography mb="30px">+8801776249691</Typography>
      </Box>
    </Box>
  </Box>
);

export default Footer;
