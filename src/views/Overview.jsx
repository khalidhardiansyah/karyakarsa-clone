import React from 'react'
import Alert from '../components/Alert/Alert'
import { SpeakerWaveIcon, ArrowRightIcon, ChartBarIcon } from '@heroicons/react/24/outline'
import { Form, Link } from 'react-router-dom'
import CardOverview from '../components/Card/CardOverview'
import Select from '../components/Select/Select'
import { useForm } from "react-hook-form";

function Description(params) {
  return(
    <div className='flex flex-col'>
    <div className=" flex flex-row items-center h-10 space-x-2">
    <SpeakerWaveIcon className='w-7 text-secondary self-start'/>
    <p className=' text-clip'>
    <span className='font-bold'>Baru! </span> Banyak karya terlaris udah dibantu Karina buat cari ide!
    </p>
    </div>
    <Link className=' underline underline-offset-1 ml-8 font-semibold'>Cari tau selengkapnya</Link>
    </div>
  )  
}

const days = [
  {
    id:1,
    name:"7 Hari",
  },
  {
    id:2,
    name:"30 Hari",
  },
  {
    id:1,
    name:"Semuanya",
  },
]

function Overview() {
  const {register, handleSubmit, control,formState:{errors}} = useForm()
  const onSelect = function(data) {
      console.log(data)
      
  }
  const cards = {
    firstCard:{
      leftfHeader:"Saldo",
      rightHeader: "Histori Penarikan",
      icon: <ArrowRightIcon/>,
      subRightContent: <div className='text-primary'>Bisa ditarik</div>,
      footer: <div className="bg-pink-100 py-2 px-5 text-sm">Saldo bisa ditarik 5 hari setelah dukungan</div>
    },
    secondCard:{
      leftfHeader:"Dukungan",
      icon: <ChartBarIcon/>,
      subRightContent: <div className='text-gray-400'>30 Hari</div>,
    },
    thirdCard:{
      leftfHeader:"Dukungan Teratas",
      rightHeader: <Form onSubmit={handleSubmit(onSelect)}>
        <Select
          name="dukungan"
          register={register}
          rules={{required: true}}
          categories={days}
          id="id"
          style="outline"
          category_value="id"
          category_label="name"
          validation_message= {
            errors.category && <span>Kategori tidak boleh kosong</span>
          }
        />
      </Form>,
      singleContent:<h2 className='text-center flex flex-col justify-center  h-full '>Tidak ada dukungan di jangka waktu diatas</h2>,
      footer: <div className='text-primary px-5 flex  h-8 items-center'>
        <Link>Lihat semua</Link>
          <ArrowRightIcon className='w-4 ml-2'/>
        
      </div>
    }
  }

  return (
    <div className='flex flex-col space-y-5'>
      <Alert description={<Description/>} style="pink"/>
      <CardOverview leftHeader={cards.firstCard.leftfHeader} rightHeader={cards.firstCard.rightHeader} icon={cards.firstCard.icon} mainLeftContent="0" mainRightContent="0" subLeftContent="Total" subRightContent={cards.firstCard.subRightContent} iconContent={cards.firstCard.icon} footerContent={cards.firstCard.footer}/>
      <CardOverview leftHeader={cards.secondCard.leftfHeader} rightHeader={cards.secondCard.rightHeader} icon={cards.secondCard.icon} mainLeftContent="0" mainRightContent="0" subLeftContent="Total" subRightContent={cards.secondCard.subRightContent}/>
      <CardOverview leftHeader={cards.thirdCard.leftfHeader} rightHeader={cards.thirdCard.rightHeader} singleContent={cards.thirdCard.singleContent} footerContent={cards.thirdCard.footer} />

    </div>
  )
}

export default Overview