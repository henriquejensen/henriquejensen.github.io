import styles from "./Card.module.css";
import Swal from "sweetalert2";

interface CardInterface {
  image: string;
  alt: string;
  projectName: string;
  projectDescription: string;
  projectLink: string;
  repositoryLink: string;
}

export default function Card({
  image,
  alt,
  projectName,
  projectDescription,
  projectLink,
  repositoryLink,
}: CardInterface) {
  const handleClick = () => {
    Swal.fire({
      title: projectName,
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
      showConfirmButton: false,
      showCloseButton: true,
      imageUrl: image,
      imageAlt: projectName,
      text: projectDescription,
      footer: `<div style="display:flex; justify-content: space-between; width: 100%">
        <a href=${repositoryLink} target="_blank">Repository link</a>
        <a href=${projectLink} target="_blank">Live project</a>
        </div>`,
    });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  return (
    <section
      className={styles.container}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
    >
      <img src={image} alt={alt} />
    </section>
  );
}
