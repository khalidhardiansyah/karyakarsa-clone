import React,{useState} from 'react'
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import Button from '../components/Button/Button';
import FormCreator from '../components/Form/FormCreator';
import FormCreatorDetail from '../components/Form/FormCreatorDetail';

function Register() {
  const [formActive, setFormActive] = useState(1);
  const renderActiveForm= function(){
    if(formActive === 1){
      return  <FormCreator nextStep={()=>setFormActive(2)}/>
    }else if(formActive === 2){
      return <FormCreatorDetail submitData={(e)=>console.log(e.target)}/>
    }
  }
  return (
   <div className='flex flex-col space-y-5 w-full text-center'>
    <div className="mt-5 flex w-full justify-center px-5">
    <div className="back">
      {
      
      formActive === 2? <Button labelButton={<ArrowLeftIcon className='text-primary w-4'/>} onClick={()=>setFormActive(1)} />:null
      }
  </div>
      <h2 className=' flex-1'>
      Langkah {formActive} dari 2
      </h2>
    </div>
    <div className="wrapper-parent bg-white p-5 text-left w-full">
      {
        renderActiveForm()
      }
    </div>
   </div>
  )
}

export default Register