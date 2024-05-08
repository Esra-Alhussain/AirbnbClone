import star from "../../images/star.png";
import cardImage from "../../images/cardImg.png";
import styles from "./Card.module.css";

const Card = () => {
  return (
    <section className={styles.cardsContainer}>
      <img src={cardImage} alt="card Image" className={styles.cardImage} />
      <div className={styles.cardInfo}>
        <img src={star} alt="star icon" className={styles.starIcon} />
        <span className={styles.rating}>5.0</span>
        <span className={styles.reviewCount}>(6)</span>
        <span className={styles.country}>USA</span>
      </div>
      <div className={styles.cardTitle}>
        <p className={styles.title}>Life lessons with Katie Zaferes</p>
        <p><span className={styles.bold}>From $136</span> / person</p>
      </div>
    </section>
  );
};

export default Card;
