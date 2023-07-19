import styles from "./Header.module.css";
import { useState } from "react";
import brand from "../images/brand.png";
import { formatDate } from "../helpers";

function Menu() {
  const [showMenu, setShowMenu] = useState(false);

  let menuStyles = styles.menu;

  if (showMenu) {
    menuStyles = `${menuStyles} ${styles.active}`;
  }

  return (
    <header className={styles.container}>
      <div className={styles.logo}>
        <img src={brand} alt="Jensen logo" />
        <hr />
        <p>{formatDate(new Date())}</p>
      </div>

      <div className={styles.profile}>
        <img
          alt="profile icon"
          src="https://avatars.githubusercontent.com/u/4885094?v=4"
        />
      </div>
    </header>
  );
}

export default Menu;
