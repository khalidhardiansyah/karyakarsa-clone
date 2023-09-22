import React from 'react'
import CardDashboard from '../components/Card/CardDashboard'

const greetingDashboard = [
    {
        title: "Buka halaman tip",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non adipisci neque facilis eligendi earum. Amet voluptatum a repellendus officiis ipsa maxime! Quas earum aliquam accusantium eos quaerat quasi, voluptatem error."
    },
    {
        title: "Mulai jualan karya",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non adipisci neque facilis eligendi earum. Amet voluptatum a repellendus officiis ipsa maxime! Quas earum aliquam accusantium eos quaerat quasi, voluptatem error."
    },
    {
        title: "Buat Paket Dukungan",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non adipisci neque facilis eligendi earum. Amet voluptatum a repellendus officiis ipsa maxime! Quas earum aliquam accusantium eos quaerat quasi, voluptatem error."
    },
    {
        title: "Streamer? Set overlay di sini",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non adipisci neque facilis eligendi earum. Amet voluptatum a repellendus officiis ipsa maxime! Quas earum aliquam accusantium eos quaerat quasi, voluptatem error."
    },
]

function OnBoarding() {
    const renderGreeting = greetingDashboard.map((greeting) =>(
        <CardDashboard title={greeting.title} description={greeting.description}/>
    ))
  return (
   <div className="flex flex-col space-y-5">
    <div className="greeting space-y-3">
        <h1 className='font-bold text-xl'>Hai Kreator!</h1>
        <p>Berikut adalah langkah selanjutnya yang bisa kamu ambil</p>
        <div className="wrapper bg-yellow-300 p-5">
            <p>Harap verfikasi email kamu</p>
            <p><span className='font-bold'>muhammadkhalidhardiansyah@gmail.com</span> sebelum kamu bisa menerima dukungan.</p>
        </div>
    </div>
     <div className='grid grid-cols-1 gap-y-4 sm:grid-cols-1 md:grid-cols-2 sm:gap-4'>
        {
            renderGreeting
        }
    </div>
   </div>
  )
}

export default OnBoarding