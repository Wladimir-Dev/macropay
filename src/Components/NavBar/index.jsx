import React from 'react'
import styles from './styles.module.css'
import tablet from './tablet.module.css'
import { useProduct } from '../../hooks/useProduct'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
export const NavBar = () => {
  const { getCollection, filtros, setFiltros } = useProduct()

  const currentCategory = filtros.categoria
  const categorias = getCollection('category')
  const location = useLocation()
  const navigate = useNavigate()

  const handleClick = (e) => {
    setFiltros((prev) => ({ ...prev, categoria: e.target.id }))
    if (location.pathname != '/') {
      navigate('/')
    }
  }
  return (
    <nav className={`${styles.navBar} ${tablet.navBar}`}>
      <ul>
        <li
          className={currentCategory == '/' ? tablet.onFocus : undefined}
          id='/'
          onClick={handleClick}
        >
          Home
        </li>
        {categorias.map((categoria) => (
          <li
            key={categoria.id}
            id={categoria.category}
            className={
              currentCategory == categoria.category ? tablet.onFocus : undefined
            }
            onClick={handleClick}
          >
            {categoria.category}
          </li>
        ))}
      </ul>
    </nav>
  )
}
