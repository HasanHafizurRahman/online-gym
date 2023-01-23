import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ExerciseDetails from "./pages/ExerciseDetails";
import Home from "./pages/Home";

function App() {
  return (
    <Box width="400px" sx={{ width: { xl: "1448px" } }} m="auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/exercise/:id" element={<ExerciseDetails />}></Route>
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;

// const axios = require("axios");

// const options = {
//   method: "GET",
//   url: "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
//   headers: {
//     "X-RapidAPI-Key": "d009bab2e3mshecc8f6ccb9292e6p100349jsn853191c7ec73",
//     "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
//   },
// };

// axios
//   .request(options)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });
