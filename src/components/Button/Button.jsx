import React from 'react'
import { NavLink } from 'react-router-dom'
import "../Button/Button.css"


const Button = ({type, children, to, width}) => {
  const buttonStyle = {
    width: width || '100%'
  };
  return (
    <NavLink
        to={to}
        className={`button ${type}`}
        style={buttonStyle}
    >
        {children}
    </NavLink>
    
  )
}

export default Button