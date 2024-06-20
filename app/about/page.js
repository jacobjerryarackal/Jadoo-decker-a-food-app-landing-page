import React from 'react'
import styles from "./about.module.css";
import Image from 'next/image';
import bg2 from "../../public/bg2.jpg";

function About() {
  return (
    <div className={styles.about}>
      <div className={styles.content}>
        <div className={styles.image}>
        <Image src={bg2} alt="Burger Image"/>
        </div>
        <div className={styles.text}>
          <h2>About Us</h2>
          <h4>Jadoo Decker <span className={styles.year}>Since 1964</span></h4>
          <p>
          Welcome to Jadoo Decker, where we’ve been serving mouth-watering burgers for over 60 years! 
          Since our humble beginnings in 1964, we've become a beloved staple in the community, known for our commitment
          to great service, taste, quality, and quantity. Founded by the Jacob family, Jadoo Decker began as a small
          roadside stand with a simple mission: to create the best burgers in town. Over the decades, we’ve grown and evolved,
          but our core values remain unchanged. We still make our burgers the way they did back in the day, with fresh ingredients,
          secret family recipes, and a passion for perfection.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About