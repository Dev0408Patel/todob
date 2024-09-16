import React from 'react'
import Item from './Item'

export default function Todoitem(props) {
    return (
        < >
            <div className="card " style={{width:"100%"}}>
                
                <div className='className-body'>
                    <Item todos={props.todos} />
                    <div className="card-footer">
                        <a href="#" style={{ marginTop: 'auto', alignSelf: 'flex-end' }} className="btn btn-success" onClick={() => { props.onDelete(props.todos) }}>Done</a>
                        <a href="#" style={{ marginTop: 'auto', alignSelf: 'flex-end' }} className="btn btn-secondary">Progress</a>
                        <a href="#" style={{ marginTop: 'auto', alignSelf: 'flex-end' }} className="btn btn-danger">X</a>
                    </div>
                </div>
            </div>
            
    </>
  )
}
