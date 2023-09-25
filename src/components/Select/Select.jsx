import React, { useState } from 'react'



function Select({style,name, id, placeholder,labelinput, validation_message, categories,icon, register, rules, category_id,
    category_value,
    category_label,
    }) {
    const [select, setSelect] = useState();
    const [focus, setFocus] = useState(false);

    const listCategories  = categories?.map((category) =>(
        <option key={category[category_id]} value={category[category_value]} >{category[category_label]}</option>
    ))

    const selectStyle = () => {
        if (style === 'primary') {
          return 'h-14 ring-1 ring-secondary focus:ring-red-500';
        }else if(style === 'secondary'){
            return 'bg-white px-4 py-2 '
        }else if(style === 'outline'){
          return 'ring-0 focus:ring-0'
      }
      
      };

    

    return (
    <label htmlFor={name} className="w-full relative mb-2">
    <div className="wrapper-parent absolute flex justify-between w-full left-3 mt-1">
        <div className="wrapper-1">
        <div className={`label ${focus ? 'text-red-500':'text-secondary '}`}>
        { select &&  labelinput}
    </div>
       <div className="placeholder text-sm ">
       {
        placeholder
    }
       </div>
        </div>
        <div className={`wrapper-2  mt-2 mr-12`}>
            <div className={`w-8 ${focus ? 'text-red-500':'text-secondary'}`}>
            {
                focus && icon 
            }
            </div>
        </div>
    </div>
     <select className={`form-input rounded-sm  w-full mr-5 border-0  ${selectStyle()}  ${select ? 'pt-6':''}`} name={name} id={id} onFocus={()=>setFocus(true)} onBlur={()=>setFocus(false)} onChange={(e)=>setSelect(e.target.value)} {...register(name, rules)}>
        {
            labelinput && <option value="">{labelinput}</option>
        }
        {
            listCategories
        }
     </select>
  <div className="validation_message text-start text-sm px-2 py-1 text-red-500">
    {validation_message}
  </div>
</label>

    )
}

export default Select