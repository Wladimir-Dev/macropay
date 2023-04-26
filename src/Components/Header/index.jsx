import React, { useId } from 'react'

import styles from './styles.module.css'
import tablet from './tablet.module.css'

import { LogoBurger, LogoIcon } from '../Icons'
import { NavBar } from '../NavBar'
import { useNavigate } from 'react-router-dom'
import { useProduct } from '../../hooks/useProduct'
export const Header = () => {
  const checkId = useId()
  const navigate = useNavigate()
  const { setFiltros } = useProduct()
 
  const setRoute = () => {
    setFiltros((prev) => ({ ...prev, categoria: '/' }))
    navigate('/')
  }
  return (
    <header className={tablet.containerHeader}>
      <section className={`${styles.header} ${tablet.header}`}>
        <div onClick={setRoute}>
          <LogoIcon />
        </div>
        <label
          htmlFor={checkId}
          className={`${styles.labelCheck} ${tablet.labelCheck}`}
        >
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
      </section>
      <NavBar />
    </header>
  )
}
