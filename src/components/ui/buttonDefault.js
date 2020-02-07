import React from "react"

import "./buttonDefault.css"

const ButttonDefault = props => {
  return (
    <button onClick={props.onClick} className="btn">
      {props.text}
    </button>
  )
}

export default ButttonDefault
