import React from 'react'
import { Col, Row, FormControl } from 'react-bootstrap'
import Select from 'react-select';

const Input = ({name, placeholder, width, options = [], onChange, label, errors, multiple, value, type}) => {
  const handleChange = (selectedOptions) => {
    if (multiple) {
      const values = selectedOptions ? selectedOptions.map(option => option.value) : [];
      onChange({
        target: { name, value: values }
      });
    } else {
      onChange({
        target: { name, value: selectedOptions ? selectedOptions.value : '' }
      });
    }
  };

  const selectedValue = multiple
    ? options.filter(option => value.includes(option.value))
    : options.find(option => option.value === value);
  
   return (
    <Row >
      <Col className='d-flex align-items-center gap-2'>
        <p className='mb-0 align-self-center fs-5 fw-bold'>{label}</p>
        {options.length > 0 ? (
          <Select
            classNamePrefix='border-black rounded-3 border-1'
            className='w-100'
            isMulti={multiple}
            closeMenuOnSelect={false}
            options={options}
            onChange={handleChange}
            value={selectedValue}
            placeholder={placeholder}
            style={{width: width}}
            
          />

        ): (
          <FormControl
            className='border-black rounded-3 border-1'
            type={type || 'text'}
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange({ target: { name, value: e.target.value } })}
            style={{ width }}
          />
        )}


      </Col>
        {errors && errors[name.toLowerCase().replace(/ /g, '')] && (
          <p className='text-danger mt-1 mb-0'>{errors[name.toLowerCase().replace(/ /g, '')]}</p>
        )}
    </Row>
    
  )
}

export default Input