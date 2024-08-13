import styles from "./Item.module.css";

const Item = ({ FoodItem }) => {
  return (
    <li className={`${styles.kgItem} list-group-item`}>
      <span className={styles.kgSpan}>{FoodItem}</span>
    </li>
  );
};

export default Item;
