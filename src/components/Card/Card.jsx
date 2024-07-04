import React from 'react'
import "../Card/Card.css"

const Card = ({title, alt, type, Icon}) => {
    
  return (
    <div className='card-container'>
        <div className={`card ${type}`}>
          <Icon alt={alt} className="card-icon"/>
        </div>
        <p>{title}</p>
    </div>
  )
}

export default Card