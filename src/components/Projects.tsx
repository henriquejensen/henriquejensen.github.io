import { projects } from "../contants";
import Card from "./Card";
import styles from "./Projects.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

export default function Projects() {
  return (
    <section className={styles.container}>
      <h2>Projects</h2>

      <div className={styles.projects}>
        <Swiper
          navigation={true}
          modules={[Navigation]}
          breakpoints={{
            998: {
              slidesPerView: 4,
              slidesPerGroup: 4,
            },
            640: {
              slidesPerView: 3,
              slidesPerGroup: 3,
            },
            410: {
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
            0: {
              slidesPerView: 1,
              slidesPerGroup: 1,
            },
          }}
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <Card
                key={project.id}
                image={project.image}
                alt={project.title}
                projectName={project.title}
                projectDescription={project.description}
                projectLink={project.link}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
