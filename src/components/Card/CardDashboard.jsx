import React from 'react'
import Button from '../Button/Button'

function CardDashboard({title, description, onClick}) {
  return (
    <div className=' shadow-md w-full flex flex-col bg-white p-5 space-y-2 min-h-fit max-h-[14rem]'>
        <h3 className="font-bold">
            {title}
        </h3>
        <p className="description text-ellipsis overflow-hidden">
            {description}
        </p>
        <div className="w-1/2">
        <Button type="button" style="primary" labelButton="Lengkapi Profile" onClick={onClick}/>

        </div>
    </div>
  )
}

export default CardDashboard