import React, { useState } from "react";
import Hero from "../components/Hero";
import SearchExercises from "../components/SearchExercises";
import Exercises from "../components/Exercises";

const Home = () => {
  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);
  return (
    <div>
      <Hero />
      <SearchExercises
        bodyPart={bodyPart}
        exercises={exercises}
        setExercises={setExercises}
      />
      <Exercises
        bodyPart={bodyPart}
        exercises={exercises}
        setExercises={setExercises}
      />
    </div>
  );
};

export default Home;
