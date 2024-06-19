import React from 'react'

export default function Service(props) {
  return (
   
    <div className="card">
      <img className="product--image" src={props.url} alt="image"/>
      <h4>{props.name}</h4>
    
  </div>
  )
}
