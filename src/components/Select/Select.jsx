import React, { useState } from 'react'
const creatorCategories = [
    {
        id:1,
        value:1,
        name:'Penulis'
    },
    {
        id:2,
        value:2,
        name:'Komik'
    },
    {
        id:3,
        value:3,
        name:'Fotografer'
    },
    {
        id:4,
        value:4,
        name:'Video'
    },
]

const listCategories  = creatorCategories.map((category) =>(
    <option key={category.id} value={category.value} >{category.name}</option>
))
function Select({name, id, placeholder,labelinput, validation_message, icon,}) {
    const [select, setSelect] = useState();
    const [focus, setFocus] = useState(false);
    const [change, setChange] = useState(false);
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
     <select className={`form-input rounded-sm  w-full h-14 border-0 ring-1 ring-secondary focus:ring-red-500 ${select ? 'pt-6':''}`} name={name} id={id} onFocus={()=>setFocus(true)} onBlur={()=>setFocus(false)} onChange={(e)=>setSelect(e.target.value)} >
        <option value="">{labelinput}</option>
        {
            listCategories
        }
     </select>
  <div className="validation_message text-sm px-2 py-1 text-red-500">
    {validation_message}
  </div>
</label>

    )
}

export default Select