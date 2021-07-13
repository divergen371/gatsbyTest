import styles from "./App.module.css";
import Hello from "./Hello";

const App = () => {
  return (
    <div className={styles.container}>
      <p className={styles.message}>
        <Hello name="React" />
        <Hello name="Gatsby" />
      </p>
    </div>
  );
};

export default App;
