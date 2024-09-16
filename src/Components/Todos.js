import React from 'react'
import Todoitem from './Todoitem'

export default function Todos(props) {
    return (
        <>
            <h1>Todo</h1>
        <div className="container shadow p-3 mb-5 bg-body-tertiary rounded" style={{
          backgroundColor: '#D4F1F4',
          height: '80vh',
          display: 'flex',
          flexDirection: 'column', // Ensure items are aligned in a column
          alignItems: 'flex-start', // Align items to the left
          gap: '1rem', // Add some space between items
          padding: '1rem', // Optional padding for aesthetics
        }} >
                {props.todos.map((todo) => {
                    return <Todoitem todos={todo} key={todo.sno} onDelete={props.onDelete} />
                })}
                
        </div>
    </>
  )
}
