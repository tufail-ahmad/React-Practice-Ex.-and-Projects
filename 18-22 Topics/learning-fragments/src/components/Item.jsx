import styles from "./Item.module.css";

const Item = ({ FoodItem, bought, handleBuyButton }) => {
  return (
    <li className={`${styles.kgItem} list-group-item ${bought && "active"}`}>
      <span className={styles.kgSpan}>{FoodItem}</span>
      <button
        onClick={handleBuyButton}
        className={`${styles.button} btn btn-info`}
      >
        Buy
      </button>
    </li>
  );
};

export default Item;
