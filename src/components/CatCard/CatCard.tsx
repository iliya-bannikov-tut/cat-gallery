import React from "react";
import styles from "./CatCard.module.scss";

interface CatCardProps {
  imageUrl: string;
}

const CatCard: React.FC<CatCardProps> = ({ imageUrl }) => {
  return (
    <div className={styles.card}>
      <img src={imageUrl} alt="Кот" className={styles.image} />
    </div>
  );
};

export default CatCard;
