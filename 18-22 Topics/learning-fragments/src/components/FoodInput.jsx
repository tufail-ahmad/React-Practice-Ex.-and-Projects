import { useState } from "react";
import styles from "./FoodInput.module.css";

const FoodInput = ({ handleKeyDown }) => {
  let buttonName = "Add";
  return (
    <div className={styles.inputContainer}>
      <input
        type="text"
        placeholder="Enter Food Item Here"
        className={styles.foodInput}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default FoodInput;
