import React, { useEffect, useState } from "react";
import CatCard from "../CatCard/CatCard";
import styles from "./CatList.module.scss";
import type { Cat } from "../../types/cat";

const API_URL = "https://api.thecatapi.com/v1/images/search?limit=6";

const CatList: React.FC = () => {
  const [cats, setCats] = useState<Cat[]>([]);

  const fetchCats = async () => {
    try {
      const res = await fetch(API_URL);
      const data: Cat[] = await res.json();
      setCats(data);
    } catch (err) {
      console.error("Ошибка", err);
    }
  };

  useEffect(() => {
    fetchCats();
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.grid}>
        {cats.map((cat) => (
          <CatCard key={cat.id} imageUrl={cat.url} />
        ))}
      </div>
      <button className={styles.button} onClick={fetchCats}>
        Загрузить еще котиков
      </button>
    </div>
  );
};

export default CatList;
