import React from 'react'
import RegisterForm from '../components/Forms/RegisterForm'
import { Fade } from 'react-awesome-reveal'

export const Register = () => {
  return (
    <div>
      <Fade>
        <RegisterForm />
      </Fade>
    </div>
  )
}