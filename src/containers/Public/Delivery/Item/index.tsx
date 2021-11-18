import React from 'react'
import { IItem } from '../types'
import { LiComponent } from './Styled'

interface IProps {
  item: IItem
  children: Node
}

const DeliveryItem: React.FC<any> = ({ children }) => {
  return <LiComponent>{children}</LiComponent>
}

export default DeliveryItem
