import React, { useId } from 'react'
import styles from './styles.module.css'
import { LogoBurger, LogoIcon } from '../Icons'
export const Header = () => {
  const checkId = useId()
  return (
    <header className={styles.header}>
      <LogoIcon />
      <label htmlFor={checkId} className={styles.labelCheck}>
        <LogoBurger />
      </label>
      <input type='checkbox' name='' id={checkId} hidden />
      <ul className={styles.options}>
        <li>
          <a>Crea Tu Cuenta</a>
        </li>
        <li>
          <a>Iniciar Sesión</a>
        </li>
        <li>car</li>
      </ul>
    </header>
  )
}
