import React, { useState } from 'react'
import {EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
function Input({type, name, id, placeholder,labelinput, validation_message, icon, showPassword, togglePassword, inputPassword, register, rules,}) {
    const [focus, setFocus] = useState(false);
    const btnPassword = function (){
        return <button className={`w-8 mt-1   text-secondary  ${focus ? 'mr-5':'absolute'}`} type='button' onClick={btnShowPassword}>
            {
               showPassword ?  <EyeIcon/> : <EyeSlashIcon/>
            }
        </button>
    }
    function btnShowPassword() {
        togglePassword()
        setFocus(false)
    }
    return (
    <label htmlFor={name} className="w-full relative mb-2">
    <div className="wrapper-parent absolute flex w-full justify-between  left-3 ">
        <div className="wrapper-1">
        <div className={`label mt-1 ${focus ? 'text-red-500' : 'text-secondary '}`}>
        {labelinput}
    </div>
       <div className="placeholder text-sm ">
       {
        placeholder
    }
       </div>
        </div>
        <div className={`wrapper-2  mt-2 flex ${inputPassword ?'mr-6':'mr-5'}` }>
        {
            inputPassword ? btnPassword(): null
        }
        <div className={`w-8 mt-1  ${focus ? 'text-red-500' : 'text-secondary'}` }>
                {
                    focus && icon 
                }              
        </div>
        </div>
    </div>
    <input  className={`form-input rounded-sm pt-7 w-full h-14 border-0 ring-1 ring-secondary focus:ring-red-500 ${placeholder ? 'pl-28': 'pl-3'}`} type={type} name={name} id={id} onFocus={()=>setFocus(true)} onBlur={()=>setFocus(false)} {...register(name, rules)}/>
  <div className="validation_message text-start text-sm px-2 py-1 text-red-500">
    {validation_message}
  </div>
</label>

    )
}

export default Input