import styles from "./Hero.module.css";
import heroImage from "../../images/Hero.png";

const Hero = () => {
  return (
    <div className={styles.container}>
      <img src={heroImage} alt="hero Image" className={styles.image} />
      <h1 className={styles.title}> Online Experiences</h1>
      <p className={styles.paragraph}>
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </div>
  );
};

export default Hero;
