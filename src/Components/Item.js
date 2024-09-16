import React from 'react'

export default function Item(props) {
  return (
    <table className="table" style={{borderBottomWidth:"0px"}}>
                        <thead style={{borderBottomWidth:"0px"}}></thead>
                        <tbody style={{borderBottomWidth:"0px"}}>
                        <tr style={{borderBottomWidth:"0px"}}>
                            <td className='dropdown col-30' style={{borderBottomWidth:"0px"}}>
                                <h5 className="card-title" style={{textAlign:"left"}}>{props.todos.title}</h5>
                                <p className="card-text">{props.todos.desc}</p>
                            </td>
                            <td className='dropdown col-1' style={{borderBottomWidth:"0px"}}>
                                <button className="btn btn-secondary dropdown-toggle"  type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Description
                                </button>
                                <ul className="dropdown-menu" >
                                    <div className='container' style={{width:"100%"}}>
                                        
                                        {props.todos.detailed}
                                        
                                    </div>
                                </ul>
                            </td>
                            </tr>
                            </tbody>
                    </table>
  )
}

