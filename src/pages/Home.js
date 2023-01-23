import React from "react";
import Hero from "../components/Hero";
import SearchExercises from "../components/SearchExercises";
import Exercises from "../components/Exercises";

const Home = () => {
  return (
    <div>
      <Hero />
      <SearchExercises />
      <Exercises />
    </div>
  );
};

export default Home;
