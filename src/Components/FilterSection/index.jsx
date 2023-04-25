import { useId } from 'react'
import { FilterIcon } from '../Icons'
import { ListOfMarcas } from '../ListOfMarcas'
import { RangePrice } from '../RangePrice'
import { Review } from '../Review'
import { Favoritos } from '../Favoritos'

import styles from './styles.module.css'
import tablet from './tablet.module.css'
export const FilterSection = () => {
  const checkId = useId()

  return (
    <section className={styles.filterSection}>
      <label htmlFor={checkId} className={`${styles.labelCheck} ${tablet.labelCheck}`}>
        <FilterIcon />
        <span> Filtros</span>
      </label>
      <input type='checkbox' name='' id={checkId} hidden />
      <div className={`${styles.options} ${tablet.options}`}>
        <ListOfMarcas />
        <RangePrice />
        <Review />
        <Favoritos />
      </div>
    </section>
  )
}
