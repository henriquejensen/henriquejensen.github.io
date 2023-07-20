import styles from "./Header.module.css";
import { formatDate } from "../helpers";
import { profile } from "../contants";

function Menu() {
  return (
    <header className={styles.container}>
      <div className={styles.logo}>
        <img src={profile.logo} alt={`${profile.name} logo`} />
        <hr />
        <p>{formatDate(new Date())}</p>
      </div>

      <div className={styles.profile}>
        <img alt="profile icon" src={profile.avatar} />
      </div>
    </header>
  );
}

export default Menu;
