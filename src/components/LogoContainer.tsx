import Logo from "../images/me.svg";
import styles from "./LogoContainer.module.css";

export default function LogoContainer() {
  return (
    <section className={styles.container}>
      <img src={Logo} alt="" />
    </section>
  )
}
