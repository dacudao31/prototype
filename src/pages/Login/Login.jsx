import React from 'react'
import { useNavigate } from 'react-router-dom'

// import TopLogo from '../../components/UI/TopLogo'
import Button from '../../components/UI/Button';
import TextField from '../../components/UI/TextField';

const Login = () => {
  const navigate = useNavigate();

  return (
    <main className='max-w-lg mx-auto flex flex-col h-screen items-center w-full desktop:pt-32 gap-5'>
          <img className='w-40' src='/logo.png' />
          <div className='flex w-full px-5 flex-col gap-5'>
              <h1 className='text-xl font-bold'>Sign In</h1>
              <TextField title="Access Key"/>
              <TextField type="password" title="Password"/>
              <Button onClick={() => navigate('/profile')}>Login</Button>
          </div>  
      </main>
  )
}

export default Login
