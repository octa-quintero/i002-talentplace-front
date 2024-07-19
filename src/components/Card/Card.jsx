import React from 'react'
import "../Card/Card.css"

const Card = ({title, alt, type, Icon, imgSrc, container}) => {
    
  return (
    <div className="card-container">
        <div className={`card ${type} ${container}`}>
          {Icon && <Icon alt={alt} className="card-icon"/>}
          {imgSrc && <img src={imgSrc} alt={alt} className="card-img"/> }
        </div>
        <p>{title}</p>
    </div>
  )
}

export default Card