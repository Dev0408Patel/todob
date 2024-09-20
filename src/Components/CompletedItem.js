import React from 'react'
import Item from './Item';

export default function CompletedItem(props) {

    const currentDateandTime = new Date();
    const style1 = {
        display: "inline",
        alignItems: "flex-end",
        
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
                                <td className='col-1' style={style1}>
                                    {}
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
