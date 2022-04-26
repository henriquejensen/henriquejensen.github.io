import styles from './Header.module.css';
import menu from '../images/menu.svg';
import { useState } from 'react';

function Menu() {
  const [showMenu, setShowMenu] = useState(false);

  let menuStyles = styles.menu;

  if (showMenu) {
    menuStyles = `${menuStyles} ${styles.active}`
  }

  return (
    <header className={styles.container}>
      <div>Henrique Jensen</div>
      <nav className={menuStyles}>
        <ul>
          <a href='#about'><li>About</li></a>
          <a href='#projects'><li>Projects</li></a>
          <a href='#contacts'><li>Contacts</li></a>
        </ul>
      </nav>
      <img src={menu} alt="menu" onClick={() => setShowMenu(p => !p)} />
    </header>
  );
}

export default Menu;
