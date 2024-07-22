import React from 'react'
import { Col, Row } from 'react-bootstrap'

const Input = ({name, placeholder, width, options, value, onChange}) => {
  return (
    <Row >
      <Col className='d-flex align-items-center gap-2'>
        <p className='mb-0 align-self-center fs-5 fw-bold'>{name}</p>
        
        {options ? (
          <select
            className='rounded-3 border-1 border-black px-3 py-2 text-muted'
            style={{width: width}}
            name={name.toLowerCase().replace(/ /g, '')}
            value={value}
            onChange={onChange}
          >
            {options.map((option, index)=>(
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        ) : (
          <input 
            className='rounded-3 border-1 border-black ps-3 py-2' 
            type="text" 
            placeholder={placeholder}
            style={{width: width}}
            name={name.toLowerCase().replace(/ /g, '')}
            value={value}
            onChange={onChange}
          />
        )}
      </Col>
    </Row>
  )
}

export default Input