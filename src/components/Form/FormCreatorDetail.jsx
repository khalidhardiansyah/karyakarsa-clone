import React, { useState } from "react";
import { Form, Link } from "react-router-dom";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { ExclamationCircleIcon} from "@heroicons/react/24/solid";
import { useForm } from "react-hook-form";
function FormCreatorDetail({submitData}) {
  
  const [showPassword, setShowPassword] = useState(false)
  const [type,setType] = useState("password")
  const {register, handleSubmit,formState:{errors}} = useForm()
  
  const btnFormCreatorDetail = function (data) {
       console.log(data)
        // submitData(data)
    }

    const togglePassword = function(){
      if (showPassword === true) {
        setShowPassword(false)
        setType("password")
      } else {
        setShowPassword(true)
        setType("text")
      }
    }
  return (
    <Form className="flex flex-col" method="post" onSubmit={handleSubmit(btnFormCreatorDetail)}>
      <h2 className="font-bold">Data Diri</h2>
      <p className="mt-3 mb-4">Lengkapi data diri kamu yah!</p>
      <Input
        labelinput="Nama Lengkap"
        type="text"
        name="fullname"
        register={register} 
        rules={{required: true, minLength:3, maxLength:20}}
        validation_message= {
          errors.fullname && <span>Nama tidak boleh kosong</span>
        }
        icon={<ExclamationCircleIcon />}
      />
      <Input
        labelinput="Alamat Email"
        type="email"
        name="emailaddress"
        register={register} 
        rules={{required: true,}}
        validation_message= {
          errors.emailaddress && <span>Email tidak boleh kosong</span>
        }
        icon={<ExclamationCircleIcon />}
      />
      <Input
        labelinput="Nomor telpon"
        type="tel"
        name="telephone"
        register={register} 
        rules={{required: true,}}
        validation_message= {
          errors.telephone && <span>Nomor telpon tidak boleh kosong</span>
        }
        icon={<ExclamationCircleIcon />}
      />
      <Input
        labelinput="Password"
        type={type}
        name="password"
        togglePassword={togglePassword}
        showPassword={showPassword}
        inputPassword
        register={register} 
        rules={{required: true, minLength:6}}
        validation_message= {
          errors.password && <span>Password tidak boleh kosong minimal 6 karakter</span>
        }
        icon={<ExclamationCircleIcon />}
      />
      <Button labelButton="SELESAIKAN" type="submit" style="primary" />

      <div className="mt-4">
        <h3 className="text-center">Sudah daftar? <Link to="/login" className="text-primary">Login aja dulu</Link></h3>
      </div>
    </Form>
  );
}

export default FormCreatorDetail;
