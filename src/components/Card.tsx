import styles from "./Card.module.css";

interface CardInterface {
  image: string;
  alt: string;
  projectName: string;
  projectDescription: string;
  projectLink: string;
}

export default function Card({
  image,
  alt,
  projectName,
  projectDescription,
  projectLink,
}: CardInterface) {
  return (
    <section className={styles.container}>
      <img src={image} alt={alt} />
    </section>
  );
}
