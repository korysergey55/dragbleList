import React, { useState } from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'

import styles from './style.module.scss'
import { LiComponent } from '../Item/Styled'
import DraggbleItem from '../Item'

const reorder = (list: any, startIndex: any, endIndex: any) => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result
}

const DraggbleList = () => {
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
                {state?.map((item: any, index: any) => (
                  <Draggable draggableId={item.id} index={index} key={item.id}>
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
                ))}
              </ul>
            )}
          </Droppable>
        </div>
      </div>
    </DragDropContext>
  )
}

export default DraggbleList
