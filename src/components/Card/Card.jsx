import React from "react";
import styles from "./Card.module.css";
import { Chip } from "@mui/material";
const Card = ({ image, name, follows }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={image} alt={image} />
        <Chip
          label={`${follows} follows`}
          sx={{
            position: "absolute",
            top: "176px",
            left: "8px",
            backgroundColor: "var(--color-black)",
            color: "var(--color-white)",
            fontSize: "10px",
            height: "23px",
            borderRadius: "10px",
            padding: "4px 8px 4px 8px",
            fontFamily: "Poppins, sans-serif",
          }}
        />
      </div>
      <div className={styles.albumName}>{name}</div>
    </div>
  );
};

export default Card;
