import React from "react";
import Items from "./Items";

const FoodItems = ({ items }) => {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <Items
          key={item}
          foodItem={item}
          handleBuyButtonClicked={() => console.log(`${items} bought`)}
        />
      ))}
    </ul>
  );
};

export default FoodItems;
