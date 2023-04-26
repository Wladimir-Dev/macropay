import React from 'react'
import styles from '../styles.module.css'
import tablet from '../tablet.module.css'
import desktop from '../desktop.module.css'
import { FacebookIcon, HappyIcon, InstagramIcon, LinkedinIcon, LogoIcon, PlaneIcon, WhatsappIcon } from '../../Icons'
export const Footer = () => {
  return (
    <section className={`${styles.footer} ${tablet.footer}`}>
        <div
          className={`${styles.contactContainer} ${tablet.contactContainer}`}
        >
          <div
            className={`${styles.ofertContainer} ${tablet.ofertContainer}  ${desktop.ofertContainer}`}
          >
            <label>ofertas y promociones</label>
            <span className={styles.titleFooter}>
              no te pierdas nuestras ofertas!
            </span>
            <div className={styles.emailContainer}>
              <input
                type='email'
                placeholder='Tu dirección de correo electrónico'
              />
              <PlaneIcon />
            </div>
          </div>
          <div
            className={`${styles.conversationContainer} ${tablet.conversationContainer}`}
          >
            <HappyIcon />
            <div>
              <span className={styles.titleFooter}>conversemos!</span>
              <p>Lorem ipsum dolor sit amet</p>
              <div
                className={`${styles.socialMediaContainer} ${tablet.socialMediaContainer}`}
              >
                <FacebookIcon />
                <InstagramIcon />
                <LinkedinIcon />
                <WhatsappIcon />
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.containerLinks} ${tablet.containerLinks}`}>
          <div className={styles.containerLogo}>
            <LogoIcon />
          </div>
          <ul>
            <li>
              <a href='/' target='_blank' rel='noopener noreferrer'>
                Envíos y devoluciones
              </a>
            </li>
            <li>
              <a href='/' target='_blank' rel='noopener noreferrer'>
                Preguntas Frecuentes
              </a>
            </li>
            <li>
              <a href='/' target='_blank' rel='noopener noreferrer'>
                Aviso de Provacidad
              </a>
            </li>
            <li>
              <a href='/' target='_blank' rel='noopener noreferrer'>
                Términos y Condiciones
              </a>
            </li>
          </ul>
        </div>
      </section>
  )
}
