import React from 'react'
import { IItem } from '../types'
import styles from './styles.module.scss'

interface IProps {
  item: IItem
}

const Item: React.FC<IProps> = ({ item }) => {
  return (
    <li className={styles.item}>
      <p className={styles.id}> {item.id}</p>
      <p className={styles.text}> {item.content}</p>
    </li>
  )
}

export default Item
