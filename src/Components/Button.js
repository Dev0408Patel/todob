import React from 'react'

export default function Button(props) {
const button={
    color: "#000000",
	backgroundColor: "#36b044",
	fontSize: "20px",
	border: "2px solid #000000",
	borderRadius: "40px",
	padding: "1px 30px",
	cursor: "pointer"
}

  return (
    <div>
	<button type="button" style={button} name="myButton" autofocus onClick={props.onClick}>Add</button>
</div>
  )
}
