import React from 'react'
import CompletedItem from './CompletedItem'

export default function Completed(props) {
    return (
      <>
      <h1>Completed</h1>
        <div className="container shadow p-3 mb-5 bg-body-tertiary rounded" style={{
          backgroundColor: '#D4F1F4',
          height: '80vh',
          display: 'flex',
          flexDirection: 'column', 
          alignItems: 'flex-start', 
          gap: '1rem', 
          padding: '1rem', 
        }} >
          {props.todos.length === 0 ?<p>Nothing in Progress</p>:
            props.todos.map((todo, index) => {
              return <CompletedItem todos={todo} key={index} ind={index} onCDelete={props.onCDelete} />
            })}
            
          
                
        </div>
    </>
  )
}
