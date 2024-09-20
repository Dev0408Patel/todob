import React from 'react'
import Item from './Item'

export default function Todoitem(props) {

    const style1 = {
        display: "inline",
        alignItems: "flex-end",
        alignSelf:"flex-end"
    };

    return (
        < >
        
            <div className="card " style={{width:"100%"}}>
                
                <div className='className-body'>
                    <h1>{ console.log(props.ind)}</h1>
                    <Item todos={props.todos} ind={props.ind} />
                    <div className="card-footer">
                        <table style={{width:"100%"}}>
                            <thead></thead>
                            <tbody>
                            <tr>
                                <td className='col-3' style={style1}>
                                        <a href="#" style={{ marginTop: 'auto', alignSelf: 'flex-end' }} className="btn btn-success" onClick={() => { props.onDone(props.todos); props.onDelete(props.todos); }}>Done</a>
                                </td>
                                <td className='col-3' style={style1}>
                                        <a href="#" style={{ marginTop: 'auto', alignSelf: 'flex-end' }} className="btn btn-secondary" onClick={() => { props.onProgress(props.todos); props.onDelete(props.todos); }}>Progress</a>
                                </td>
                                <td className='col-1' style={style1}>
                                    <a href="#" style={{ marginTop: 'auto', alignSelf: 'revert' }} className="btn btn-danger" onClick={() => { props.onDelete(props.todos) }}>X</a>
                                </td>
                                </tr>
                                </tbody>
                            </table>
                    </div>
                </div>
            </div>
            
    </>
  )
}
