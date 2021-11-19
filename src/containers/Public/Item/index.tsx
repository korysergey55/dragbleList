import React from 'react'
import { LiComponent } from './Styled'

const DraggbleItem: React.FC<any> = ({
  children,
  ref,
  draggableProps,
  dragHandleProps,
}) => {
  return (
    <LiComponent ref={ref} {...draggableProps} {...dragHandleProps}>
      {children}
    </LiComponent>
  )
}

export default DraggbleItem
