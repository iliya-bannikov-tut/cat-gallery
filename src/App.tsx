import React from "react";
import styles from "./App.module.scss";
import CatList from "./components/CatList/CatList";

const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <h1 className={styles.title}>Галлерея котиков</h1>
      <CatList />
    </div>
  );
};

export default App;
