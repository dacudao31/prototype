import React from 'react'
import Back from '../../components/UI/Back'
import TextField from '../../components/UI/TextField'
import Button from '../../components/UI/Button'

const AddAdmin = () => {
  return (
    <main>
      <Back to={'/profile/admins'}/>
      <h1 className='font-bold text-xl'>Create an Admin</h1>
      <section className='flex flex-col gap-2'>
        <TextField title="Name"/>
        <TextField title="Access Key"/>
        <TextField type="password" title="Password"/>
        <TextField type="password" title="Confirm Password"/>
        <Button>Create</Button>
      </section>
    </main>
  )
}

export default AddAdmin
