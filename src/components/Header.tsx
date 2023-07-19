import styles from "./Header.module.css";
import brand from "../images/brand.png";
import { formatDate } from "../helpers";
import { AVATAR_URL, GITHUB_URL } from "../contants";

function Menu() {
  return (
    <header className={styles.container}>
      <div className={styles.logo}>
        <img src={brand} alt="Jensen logo" />
        <hr />
        <p>{formatDate(new Date())}</p>
      </div>

      <div className={styles.profile}>
        <img alt="profile icon" src={AVATAR_URL} />
      </div>
    </header>
  );
}

export default Menu;
