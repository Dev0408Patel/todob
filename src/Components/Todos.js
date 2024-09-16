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
          flexDirection: 'column', 
          alignItems: 'flex-start', 
          gap: '1rem', 
          padding: '1rem', 
        }} >
          {props.todos.length === 0 ?<p>Nothing to Display...You are all Free</p>:
            props.todos.map((todo, index) => {
              return <Todoitem todos={todo} key={index} ind={index} onDelete={props.onDelete} />
            })}
            
          
                
        </div>
    </>
  )
}
