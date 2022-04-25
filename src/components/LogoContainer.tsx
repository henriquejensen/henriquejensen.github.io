// import Logo from "../images/my.svg";
// import Background from "../images/background.svg";
import OriginalBackground from "../images/logo.svg";
import styles from "./LogoContainer.module.css";

export default function LogoContainer() {
  return (
    <section className={styles.container}>
      {/* <img src={Logo} alt="" />
      <img src={Background} alt="" className={styles.background} /> */}
      <img src={OriginalBackground} alt="" />
    </section>
  )
}
