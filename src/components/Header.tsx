import styles from './Header.module.css';

function Menu() {
  return (
    <header className={styles.container}>
      <div>Henrique Jensen</div>
      <nav>
        <ul>
          <li>About</li>
          <li>Projects</li>
          <li>Contacts</li>
        </ul>
      </nav>
    </header>
  );
}

export default Menu;
