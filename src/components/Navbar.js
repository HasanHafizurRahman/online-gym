import { Stack } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo-2.jpg";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{
        gap: { sm: "123px", xs: "40px" },
        mt: { sm: "32px", xs: "20px" },
        justifyContent: "none",
      }}
      px="20px"
    >
      <Link to="/">
        <img
          src={logo}
          alt="logo"
          style={{ height: "48px", width: "48px", margin: "0 20px" }}
        />
      </Link>
      <Stack
        direction="row"
        gap="40px"
        fontFamily="Alegreya"
        fontSize="24px"
        alignItems="flex-end"
      >
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#3A1212",
            borderBottom: "3px solid #FF2625",
          }}
        >
          Home
        </Link>
        <a
          href="#excercises"
          style={{
            textDecoration: "none",
            color: "#3A1212",
          }}
        >
          Excercise
        </a>
      </Stack>
    </Stack>
  );
};

export default Navbar;
