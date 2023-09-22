import React from 'react'
import FormLogin from '../components/Form/FormLogin'

function Login() {
  return (
    <div className='flex flex-col space-y-5 w-full text-center'>
        <div className="mt-5">
        <h3 className='text-xl font-semibold'>Login</h3>
        </div>
        <div className="wrappper w-full bg-white p-5 ">
            <FormLogin/>
        </div>
   </div>
  )
}

export default Login