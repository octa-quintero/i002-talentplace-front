import React from 'react'
import { NavLink } from 'react-router-dom'
import "../Button/Button.css"


const Button = ({type, children, to, htmlType, width, onClick}) => {
  const buttonStyle = {
    width: width || '100%'
  };

  if (to) {
    return (
      <NavLink
        onClick={onClick}
        to={to}
        className={`button ${type}`}
        style={buttonStyle}
      >
        {children}
      </NavLink>
    );
  }

  return (
    <button
      type={htmlType || 'button'}
      className={`button ${type}`}
      style={buttonStyle}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button