import React from 'react'
import "../Card/Card.css"

const Card = ({title, alt, type, Icon, imgSrc}) => {
    
  return (
    <div className='card-container'>
        <div className={`card ${type}`}>
          {Icon && <Icon alt={alt} className="card-icon"/>}
          {imgSrc && <img src={imgSrc} alt={alt} className="card-img"/> }
        </div>
        <p>{title}</p>
    </div>
  )
}

export default Card