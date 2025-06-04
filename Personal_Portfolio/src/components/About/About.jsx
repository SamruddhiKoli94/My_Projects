import React from 'react'
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";


export const About = () => {
  return (
   <section className={styles.container} id ="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src= {getImageUrl("about/cursorIcon.png")} alt="Cursor icon"/>
            <div className={styles.aboutItemText}>
              <h3>Android Developer</h3>
              <p>
                I'am a Android developer.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src= {getImageUrl("about/serverIcon.png")} alt="Cursor icon"/>
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I'am a backend developer.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src= {getImageUrl("about/cursorIcon.png")} alt="Cursor icon"/>
            <div className={styles.aboutItemText}>
              <h3>Android Developer</h3>
              <p>
                I'am a Android developer.
              </p>
            </div>
          </li>
        </ul>
      </div>
   </section>
  )
}

