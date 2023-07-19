import back from "../images/back.svg";
import styles from "./LogoContainer.module.css";

export default function LogoContainer() {
  return (
    <section className={styles.container}>
      <img src={back} alt="Main layer of stranger things series" />
    </section>
  );
}
