import React from "react";
import styles from "./Card.module.scss";

function Card({ title, imageUrl, price, onFavorite, onPlus }) {
   const [isAdded, setIsAdded] = React.useState(false);

   const onClickPLus = () => {
      onPlus({ title, imageUrl, price });
      setIsAdded(!isAdded);
   };

   return (
      <div className={styles.card}>
         <div className={styles.favorite} onClick={onFavorite}>
            <img src="/img/heart-unliked.svg" alt="Unliked" />
         </div>
         <img width={133} height={112} src={imageUrl} alt="Sneakers" />
         <h5>{title}</h5>
         <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
               <span>Ціна:</span>
               <b>{price} $</b>
            </div>
            <img
               className={styles.plus}
               alt="Plus"
               onClick={onClickPLus}
               src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"}
            />
         </div>
      </div>
   );
}

export default Card;
