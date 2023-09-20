import React, { useState } from 'react'
function Input({type, name, id, placeholder,labelinput, validation_message, icon,}) {
    const [focus, setFocus] = useState(false);
    return (
    <label htmlFor={name} className="w-full relative mb-2">
    <div className="wrapper-parent absolute flex justify-between w-full left-3 mt-1">
        <div className="wrapper-1">
        <div className={`label ${focus ? 'text-red-500':'text-secondary '}`}>
        {labelinput}
    </div>
       <div className="placeholder text-sm ">
       {
        placeholder
    }
       </div>
        </div>
        <div className={`wrapper-2  mt-2 mr-5`}>
            <div className={`w-8 ${focus ? 'text-red-500':'text-secondary'}`}>
            {
                focus && icon 
            }
          
            </div>
        </div>
    </div>
    <input className={`form-input rounded-sm pt-7 w-full h-14 border-0 ring-1 ring-secondary focus:ring-red-500 ${placeholder ? 'pl-28': 'pl-3'}`} type={type} name={name} id={id} onFocus={()=>setFocus(true)} onBlur={()=>setFocus(false)}/>
  <div className="validation_message text-sm px-2 py-1 text-red-500">
    {validation_message}
  </div>
</label>

    )
}

export default Input