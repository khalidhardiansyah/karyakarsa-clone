import React,{useState} from 'react'
import { Form } from 'react-router-dom'
import { ExclamationCircleIcon } from "@heroicons/react/24/solid";

import Input from '../components/Input/Input'
import Button from '../components/Button/Button';
import Select from '../components/Select/Select';

function Register() {
  const [formActive, setFormActive] = useState(1);
  const renderActiveForm= function(){
    if(formActive === 1){
      return  <Form className='flex flex-col'>
      <h2 className='font-bold'>
          Pendaftaraan Kreator
        </h2>
        <p className='mt-3 mb-4'>Yuk bergabung dengan <span className='font-bold'>100,000+ kreator</span> lainnya!</p>
       
        <Input inputType="input" labelinput='Link halaman kreator' placeholder="karyakarsa.com/"  icon={<ExclamationCircleIcon/>}/>
        <Select labelinput="Kategori Kreator" icon={<ExclamationCircleIcon/>}/>        
        <Button labelButton="LANJUT" type="button" style="primary" onClick={()=>setFormActive(2)}/>
        </Form>
    }else if(formActive === 2){
      return <Form className='flex flex-col'>
      <h2 className='font-bold'>
          Data Diri
        </h2>
        <p className='mt-3 mb-4'>Lengkapi data diri kamu yah!</p>
        <Input labelinput='Nama Lengkap' type="text"  icon={<ExclamationCircleIcon/>}/> 
        <Input labelinput='Alamat Email' type="email"  icon={<ExclamationCircleIcon/>}/> 
        <Input labelinput='Nomor telpon' type="tel"  icon={<ExclamationCircleIcon/>}/>  
        <Input labelinput='Password' type="password"  icon={<ExclamationCircleIcon/>}/>        
        <Button labelButton="SELESAIKAN" type="button" style="primary" onClick={()=>setFormActive(1)}/>
        </Form>
    }
  }
  return (
   <div className='flex flex-col space-y-5 w-full text-center'>
    <h1 className="mt-5">
      Langkah {formActive} dari 2
    </h1>
    <div className="wrapper-parent border border-red-500 bg-white p-5 text-left w-full">
      {
        renderActiveForm()
      }
    </div>
   </div>
  )
}

export default Register