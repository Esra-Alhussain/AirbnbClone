import star from "/images/star.png";
import styles from "./Card.module.css";
// import cardImage from "../../images/cardImg.png";

const Card = (props) => {
  return (
    <section className={styles.cardsContainer}>
      <img src={`/images/${props.image}`} alt="card Image" className={styles.cardImage} />

      <div className={styles.cardInfo}>
        <img src={star} alt="star icon" className={styles.starIcon} />
        <span className={styles.rating}>{props.rating}</span>
        <span className={styles.viewCount}>({props.reviewCount})</span>
        <span className={styles.country}>{props.country}</span>
      </div>
      <div className={styles.cardText}>
        <p className={styles.title}>{props.title}</p>
        <p>
          <span className={styles.bold}>From ${props.price}</span> / person
        </p>
      </div>
    </section>
  );
};

export default Card;
