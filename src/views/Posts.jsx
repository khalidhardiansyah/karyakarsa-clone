import React from 'react'
import Alert from '../components/Alert/Alert'
import {InformationCircleIcon} from "@heroicons/react/24/outline"
import Button from '../components/Button/Button'

function Description(params) {
  return(
    <div className='flex flex-col'>
    <div className=" flex flex-row items-center h-16 md:h-10 space-x-2">
    <InformationCircleIcon className='w-10 text-secondary self-start'/>
    <p className=' text-clip'>
      Fitur promosi saat ini hanya tersedia untuk kreator dengan kategori <span className='font-bold'>Penulis atau Komik</span>  serta tipe karya
    <span className='font-bold'>tulisan, komik, dan webtoon</span>
    </p>
    </div>
    </div>
  )  
}


function Posts() {
  return (
    <div className='flex flex-col space-y-5'>
    <Alert description={<Description/>} style="blue"/>
    <div className="header flex flex-row justify-between items-center">
      <h1 className='font-bold'>Karya <span className='bg-gray-200 font-normal py-1 ml-2 rounded-full px-4'>0</span></h1>
        <Button labelButton="Buat Karya" style="primary"/>
    </div>
    <div className="content">
      <div className="bg-white p-5 shadow-md">
        <h3 className=''>Belum ada karya :(</h3>
        <p className='mt-6'>Jual karya kamu berupa tulisan, komik, audio, file(s) baik secara satua maupun paketan</p>
      </div>
    </div>
    </div>
  )
}

export default Posts