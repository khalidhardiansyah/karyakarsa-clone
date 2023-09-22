import React from "react";
import { Form, json } from 'react-router-dom'
import Input from "../Input/Input";
import Button from "../Button/Button";
import Select from "../Select/Select";
import { ExclamationCircleIcon } from "@heroicons/react/24/solid";
import { useForm } from "react-hook-form";


function FormCreator({nextStep}) {
  const {register, handleSubmit, control,formState:{errors}} = useForm()
    const btnCreator = function(data) {
        console.log(data)
        const {username, category} = data
        const obj = {
          username: username,
          category: category
        }
        console.log(obj)
         nextStep()
    }
  return (
    <Form className="flex flex-col" onSubmit={handleSubmit(btnCreator)}>
      <h2 className="font-bold">Pendaftaraan Kreator</h2>
      <p className="mt-3 mb-4">
        Yuk bergabung dengan <span className="font-bold">100,000+ kreator</span>{" "}
        lainnya!
      </p>
      <Input
        
        inputType="input"
        labelinput="Link halaman kreator"
        name="username"
        placeholder="karyakarsa.com/"
        register={register} 
        rules={{required: true, minLength:3, maxLength:20}}
        validation_message= {
          errors.username && <span>Username tidak boleh kosong, minimal 3 karakter dan maksimal 20 karakter</span>
        }
        icon={<ExclamationCircleIcon />}
      />
     
      <Select
        labelinput="Kategori Kreator"
        name="category"
        icon={<ExclamationCircleIcon />}
        register={register}
        rules={{required: true}}
        validation_message= {
          errors.category && <span>Kategori tidak boleh kosong</span>
        }
      />
      {/* <Button
        onClick={btnCreator}
        labelButton="LANJUT"
        type="submit"
        style="primary"
      /> */}
      <Button
        labelButton="LANJUT"
        type="submit"
        style="primary"
      />
    </Form>
  );
}

export default FormCreator;
