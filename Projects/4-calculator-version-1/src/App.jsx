import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonContainer from "./components/ButtonContainer";

function App() {
  return (
    <center className={styles.calculator}>
      <Display></Display>
      <ButtonContainer></ButtonContainer>
    </center>
  );
}

export default App;
