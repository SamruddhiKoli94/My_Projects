import React from 'react';
import styles from "./Hero.module.css";
import { getImageUrl } from '../../utils';

export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'am Samruddhi</h1>
            <p className={styles.description}>I'm a motivated Full Stack Developer with skills in React, Express, Spring Boot, and Android development. As a fresher, I'm eager to build real-world projects, learn continuously, and grow in the tech industry. Reach out if you'd like to learn more !</p>
            <a href= "samruddhiko300@gmail.com" className={styles.contactBtn}>
              Contact Me
              </a>
        </div>
        <img src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}/>
        <div className={styles.topBlur}/>
         <div className={styles.bottomBlur}/>
    </section>
  );
};
