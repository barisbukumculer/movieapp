import Movies from '@/app/components/Movies';
import React from 'react'

const Page = async ({params}) => {
  const keyword =params.keyword;
  
  const res=await fetch(`https://api.themoviedb.org/3/search/movie?api_key=61f5786413812b26b7cc2d2fa5d240bb&query=${keyword}?include_adult=false&language=en-US&page=1  `) 
  const data=await res.json();

  console.log(data?.results,"data")  

  return (
    <div>
      {
        !data?.results ? 
        <div>Aranılan Film Bulunamadı!</div> : 
        <div className='flex items-center flex-wrap gap-2'>
        {
          data?.results?.map((dt,i)=>(
            <Movies key={i} data={dt} />
          ))
        }
        </div>
      }
    </div>
  )
}

export default Page