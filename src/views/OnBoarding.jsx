import React from 'react'
import CardDashboard from '../components/Card/CardDashboard'
import Alert from '../components/Alert/Alert'

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

function Description(){
    return (
        <p>
        <span className='font-bold'>muhammadkhalidhardiansyah@gmail.com</span> sebelum kamu bisa menerima dukungan.
    </p>
    )
}

const renderGreeting = greetingDashboard.map((greeting) =>(
    <CardDashboard title={greeting.title} description={greeting.description}/>
))
function OnBoarding() {
  return (
   <div className="flex flex-col space-y-5">
    <div className="space-y-3">
    <h1 className='font-bold text-xl'>Hai Kreator!</h1>
    <h2>Berikut adalah langkah selanjutnya yang bisa kamu ambil</h2>
    </div>
    <Alert title="Harap verfikasi email kamu" description={<Description/>} style="yellow"/>
     <div className='grid grid-cols-1 gap-y-4 sm:grid-cols-1 md:grid-cols-2 sm:gap-4'>
        {
            renderGreeting
        }
    </div>
   </div>
  )
}

export default OnBoarding