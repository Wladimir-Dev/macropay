import React, { useId } from 'react'

import styles from './styles.module.css'
import tablet from './tablet.module.css'

import { LogoBurger, LogoIcon } from '../Icons'
export const Header = () => {
  const checkId = useId()
  return (
    <header className={`${styles.header} ${tablet.header}`}>
      <LogoIcon />
      <label htmlFor={checkId} className={`${styles.labelCheck} ${tablet.labelCheck}`}>
        <LogoBurger />
      </label>
      <input type='checkbox' name='' id={checkId} hidden />
      <ul className={`${styles.options} ${tablet.options}`}>
        <li>
          <a>Crea Tu Cuenta</a>
        </li>
        <li>
          <a>Iniciar Sesión</a>
        </li>
      </ul>
    </header>
  )
}
