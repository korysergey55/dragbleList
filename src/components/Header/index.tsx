import React from 'react'
import { useHistory } from 'react-router'
import { paths } from 'utils/paths'
import styles from './styles.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShippingFast } from '@fortawesome/free-solid-svg-icons'


const Header = ({ title = 'Shipping Fast' }) => {
  const history = useHistory()
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a className={styles.link} onClick={() => history.push(paths.home)}>
          <FontAwesomeIcon
            className={styles.iconAwesome}
            icon={faShippingFast}
            color="red"
            size="2x"
          />
        </a>
        <h2 className={styles.title}>{title}</h2>
      </div>
    </header>
  )
}

export default Header
