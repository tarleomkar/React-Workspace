import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";

function App() {
  const foodItems = [
    "Dal",
    "Green vegetables",
    "Chai Aur Code",
    "Milk",
    "PavBhaji",
  ];

  let textToShow = "Food Item Entered by user";
  // const foodItems = [];
  return (
    <>
      {/* Child Props (use using {props.children})*/}
      <Container>
        <h1 className="food-heading">Healthy Food</h1>
        <ErrorMessage items={foodItems}></ErrorMessage>
        <FoodInput handleOnChange={handleOnChange}></FoodInput>
        <p>{textToShow}</p>
        <FoodItems items={foodItems}></FoodItems>
      </Container>

      {/* <Container>
      <p>
        Above is the list of healthy foods that are good for your health and well being.
      </p>
    </Container> */}

      {/* clickable action events */}
    </>
  );
}

export default App;
