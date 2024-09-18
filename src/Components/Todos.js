import React from 'react'
import Todoitem from './Todoitem'
import Button from './Button';

export default function Todos(props) {
    return (
        <>
        {/* <h1>Todo </h1><Button/> */}
        <nav class="navbar" style={{ width: "88%",margin: "0 auto" }}>
          <div class="container-fluid" style={{display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ flex: 1, textAlign: "center" }}>
              <a className="navbar-brand" style={{ fontSize: "2em", fontWeight:"bold" }}>Todo</a>
            </div>
            <Button/>
          </div>
        </nav>
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
              return <Todoitem todos={todo} key={index} ind={index} onDelete={props.onDelete} onProgress={ props.onProgress} />
            })}
            
          
                
        </div>
    </>
  )
}
