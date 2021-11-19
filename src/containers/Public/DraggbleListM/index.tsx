import React, { useState } from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'

import styles from './styles.module.scss'
import { LiComponent } from '../Item/Styled'

const reorder = (list: any, startIndex: any, endIndex: any) => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result
}
const DraggableItem = ({ item, index }: any) => {
  return (
    <Draggable draggableId={item.id} index={index}>
      {provided => (
        <LiComponent
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {item.content}
        </LiComponent>
      )}
    </Draggable>
  )
}

const ItemList = React.memo(function ItemList({ items }: any) {
  return items?.map((item: any, index: number) => (
    <DraggableItem item={item} index={index} key={item.id} />
  ))
})
const DraggbleListMemo = () => {
  const [state, setState] = useState<any>([
    { id: '1', content: 'apple' },
    { id: '2', content: 'avocado' },
    { id: '3', content: 'apricot' },
    { id: '4', content: 'pear' },
    { id: '5', content: 'grapefruit' },
  ])

  function onDragEnd(result: any) {
    if (!result.destination) {
      return
    }
    if (result.destination.index === result.source.index) {
      return
    }
    const quotes = reorder(state, result.source.index, result.destination.index)
    setState(quotes)
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className={styles.container}>
        <div className={styles.wripperMyList}>
          <h2 className={styles.title}>My delivery-list</h2>

          <Droppable droppableId="my-delivery-list">
            {provided => (
              <ul ref={provided.innerRef} {...provided.droppableProps}>
                <ItemList items={state} />
              </ul>
            )}
          </Droppable>
        </div>
      </div>
    </DragDropContext>
  )
}

export default DraggbleListMemo
