import React,{useState} from 'react'
import Button from '../Button/Button'
import Input from '../Input/Input'
import {useForm} from "react-hook-form"
import { Form, Link } from 'react-router-dom'
import { ExclamationCircleIcon } from '@heroicons/react/24/solid'
function FormLogin() {
    const {handleSubmit, register,formState:{errors}} = useForm()
    const [showPassword, setShowPassword] = useState(false)
    const [type,setType] = useState("password")
const togglePassword = function(){
      if (showPassword === true) {
        setShowPassword(false)
        setType("password")
      } else {
        setShowPassword(true)
        setType("text")
      }
    }
    const btnLogin = function(data){
        console.log(data)
    }
  return (
    <Form className="flex flex-col" onSubmit={handleSubmit(btnLogin)}>
    <h3 className="mt-3 mb-4 text-start">
     Belum punya akun? <Link className='text-primary' to="/">Daftar dulu</Link>
    </h3>
    <Input
      labelinput="Alamat Email"
      name="emailaddress"
      register={register} 
      rules={{required: true}}
      validation_message= {
        errors.emailaddress && <span>Email tidak boleh kosong</span>
      }
      icon={<ExclamationCircleIcon />}
    />
    <Input
       type={type}
      showPassword={showPassword}
      togglePassword={togglePassword}
      labelinput="Password"
      name="password"
      register={register} 
      inputPassword
      rules={{required: true}}
      validation_message= {
        errors.password && <span>Password tidak boleh kosong</span>
      }
      icon={<ExclamationCircleIcon />}
    />
    <Button
      labelButton="LANJUT"
      type="submit"
      style="primary"
    />
  </Form>
  )
}

export default FormLogin