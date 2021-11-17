import React from 'react'
import { useHistory } from 'react-router'
import { paths } from 'utils/paths'
import styles from './styles.module.scss'
import defaltLogo from 'sources/images/react.png'

interface Iprops {
  logo?: string
  title?: string
}

const Header: React.FC<Iprops> = ({ logo = defaltLogo, title = 'Header' }) => {
  const history = useHistory()
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a className={styles.link} onClick={() => history.push(paths.home)}>
          <img className={styles.logo} src={logo} alt="logo" />
        </a>
        <h2 className={styles.title}>{title}</h2>
      </div>
    </header>
  )
}

export default Header
