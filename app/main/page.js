import Image from 'next/image'
import React from 'react';
import styles from "./main.module.css";
import Link from 'next/link';
import burger from "../../public/burger.jpg";

function Main() {
  
  return (
    <section className={styles.home} id="home ">
      <div className={styles.content}>
        
        <h3 className={styles.mainfont}>
          The Jad<span className={styles.orangeColor}>oo</span> Decker
        </h3>
        <h3>
          fastest f<span className={styles.orangeColor}>oo</span>d for , instant
          <span className={styles.orangeColor}>Hunger</span>
        </h3>

        <p>
          The most Delicious, most tasty burger in the whole world. Welcome
          to the  Jadoo Decker. Jadoo Deccker provides you the fastest food service. We present you the instant Burgers with delicious taste. Once you start eating our burgers 
          then there is no turning back!
        </p>

        <Link href="#" className={styles.btn}>ORDER NOW</Link>
      </div>
        
      <div className={styles.image}>
        <Image src={burger} alt="Burger Image" />
      </div>
    </section>
  )
}

export default Main