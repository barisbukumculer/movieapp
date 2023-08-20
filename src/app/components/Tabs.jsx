"use client"
import Link from 'next/link'
import React from 'react'
import {useSearchParams} from 'next/navigation'

const Tabs = () => {
  const searchParams= useSearchParams()
  const genre=searchParams.get('genre')

  console.log(genre,"genre")  

  const tabs=[
    {
       name:"En Popüler",
      url:"popular"
    }, 
    {
      name:"Son Eklenenler",
     url:"latest"
   },
   {
    name:"Yakında Eklenecekler",
   url:"upcoming"
 }
  ]
  return (
    <div className='p-5 m-5 bg-gray-100 dark:bg-gray-900 flex items-center justify-center gap-7'>
      {
        tabs.map((tab,index)=>{
          return (
            <Link className={`cursor-pointer hover:opacity-75 transition-opacity ${tab.url===genre ?"underline underline-offset-8 text-amber-600" :""}`} href={`/?genre=${tab.url}`}>{tab.name}</Link>
          )
        })
      }
    </div>
  )
}

export default Tabs