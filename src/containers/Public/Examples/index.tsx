import React, { useState } from 'react'
import styled from '@emotion/styled'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { LiComponent } from '../Delivery/Item/Styled'

const initial = [
  { id: '1', content: 'apple' },
  { id: '2', content: 'avocado' },
  { id: '3', content: 'apricot' },
  { id: '4', content: 'pear' },
  { id: '5', content: 'grapefruit' },
]
const reorder = (list: any, startIndex: any, endIndex: any) => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result
}

const QuoteItem = styled.div`
  width: 200px;
  border: 1px solid grey;
  margin-bottom: 8px;
  background-color: lightblue;
  padding: 8px;
`

function Quote({ quote, index }: any) {
  return (
    <Draggable draggableId={quote.id} index={index}>
      {provided => (
        <LiComponent
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {quote.content}
        </LiComponent>
      )}
    </Draggable>
  )
}

const QuoteList = React.memo(function QuoteList({ quotes }: any) {
  return quotes.map((quote: any, index: number) => (
    <Quote quote={quote} index={index} key={quote.id} />
  ))
})

export default function QuoteApp() {
  const [state, setState] = useState<any>({ quotes: initial })

  function onDragEnd(result: any) {
    if (!result.destination) {
      return
    }

    if (result.destination.index === result.source.index) {
      return
    }

    const quotes = reorder(
      state.quotes,
      result.source.index,
      result.destination.index
    )

    setState({ quotes })
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="list">
        {provided => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            <QuoteList quotes={state.quotes} />
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}
