import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  // let foodItems = ['Dal', 'Green vegitables', 'Chai Aur Code', 'Milk', 'PavBhaji']
  let foodItems = [];
  // ***** Conditional Rendering *****
  // 1. If-else Statement
  // if(foodItems.length === 0)
  // {
  //   return <h3>I am Hungry</h3>
  // }
  // We using Ternary operator with help of expression

  let emptyMessage = foodItems.length === 0 ? <h3>I am still Hungry.</h3>: null;

  return (
    <>
      <h1>Healthy Food</h1>
      {/* 2. With Ternary Operator */}
      {/* {foodItems.length === 0 ? <h3>I am still Hungry.</h3>: null} */}
      {/* or */}
      {/* {emptyMessage} */}
      {/* 3. Logical operator */}
      {foodItems.length === 0 && <h3>I am still Hungry.</h3>}
      <ul class="list-group">
        {/* <li class="list-group-item">Dal</li>
        <li class="list-group-item">Green vegitables</li>
        <li class="list-group-item">Chai Aur Code</li>
        <li class="list-group-item">Milk</li>
        <li class="list-group-item">PavBhaji</li> */}
        {foodItems.map((item) => <li key={item} className="list-group-item">{item}</li>)}
      </ul>
    </>
  );
}
export default App;
