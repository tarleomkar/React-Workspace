import React from "react";
import styles from "./Items.module.css";

const Items = ({ foodItem, handleBuyButtonClicked }) => {
  const handleButtonClick = (event) => {
    console.log(event); // Logs the event details
    console.log(`${foodItem} being bought`);
    handleBuyButtonClicked(); // Calls the prop function passed from the parent
  };

  return (
    <li className={`${styles["kg-item"]} list-group-item`}>
      <span className={styles["kg-span"]}>{foodItem}</span>
      <button
        className={`${styles.button} btn btn-info`}
        onClick={handleButtonClick} // Corrected function name
      >
        Buy
      </button>
    </li>
  );
};

export default Items;
