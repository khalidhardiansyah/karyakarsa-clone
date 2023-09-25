import React from 'react'
import {ArrowRightIcon} from "@heroicons/react/24/outline"
import { Link } from 'react-router-dom'
function CardOverview({leftHeader, rightHeader, icon,singleContent ,mainLeftContent
    ,mainRightContent,subLeftContent,subRightContent,footerContent, iconContent}) {
  return (
    <div className='bg-white  w-full flex flex-col space-y-2 pt-4 border'>
        <div className="card-header px-5 items-center flex flex-row justify-between">
            <div className="header-right">
                <h1 className='font-bold'>{leftHeader}</h1>
            </div>
            <div className="header-left flex flex-row items-center">
                <h1 className='font-semibold text-primary mr-1'>{rightHeader}</h1>
                {
                    icon && <div className='w-4 text-primary'>
                    {icon}
                </div>
                }
                </div>
        </div>
        <div className={`card-content ${singleContent ? 'bg-gray-200 h-[6rem]  max-h-[7rem] mx-5':''}`}>
        {
            singleContent ? singleContent : (<div className='flex flex-row space-x-3 px-5'>
                <div className=" basis-1/2 py-4">
                <h1 className='text-4xl'>{mainLeftContent}</h1>
                <p className='tetx-sm text-gray-400'>{subLeftContent}</p>
            
        </div>
    
    <div className=" basis-1/2 py-4">
                <h1 className='text-4xl'>{mainRightContent}</h1>
                <div className='text-sm flex flex-row items-center '>
                    <div className='mr-1'>{subRightContent}</div>
                    <div className='w-4 text-primary'>
                    {iconContent}
                </div>
                </div>
       
       
       </div>
            </div>)
        }
        </div>
        <div className={`card-footer ${footerContent?"":"pb-5"}`}>
                {footerContent}
            
        </div>
       
    </div>
  )
}

export default CardOverview