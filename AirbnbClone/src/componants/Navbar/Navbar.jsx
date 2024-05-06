import airbnbLogo from "../../images/airbnbLogo.png";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <img src={airbnbLogo} alt="airbnb Logo" className={styles.image} />
    </div>
  );
};

export default Navbar;
