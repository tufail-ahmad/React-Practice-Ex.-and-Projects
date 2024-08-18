import styles from "./FoodInput.module.css";

const FoodInput = ({ handleKeyDown, handleOnClick }) => {
  return (
    <div className={styles.inputContainer}>
      <input
        type="text"
        placeholder="Enter Food Item Here"
        className={styles.foodInput}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleOnClick} className={styles.button}>
        Add
      </button>
    </div>
  );
};

export default FoodInput;
