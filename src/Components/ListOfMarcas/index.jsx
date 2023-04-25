import React from 'react'
import styles from './styles.module.css'
import { useProduct } from '../../hooks/useProduct'
import { Marca } from '../Marca'
export const ListOfMarcas = () => {
  const { getMarcas } = useProduct()
  const marcas = getMarcas()
  return (
    <section className={styles.listOfMarcas}>
      {marcas.map((marca) => (
        <Marca key={marca} marca={marca} />
      ))}
    </section>
  )
}
