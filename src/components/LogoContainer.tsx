import Logo from "../images/me.svg";
import back from "../images/back.svg";
import styles from "./LogoContainer.module.css";

export default function LogoContainer() {
  return (
    <section className={styles.container}>
      <img src={back} alt="" />
    </section>
  );
}
