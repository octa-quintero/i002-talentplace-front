import React from 'react'
import LoginForm from '../components/Forms/LoginForm'
import { Fade } from 'react-awesome-reveal'

export const Login = () => {
  return (
    <div>
      <Fade>
        <LoginForm />
      </Fade>
    </div>
  )
}
