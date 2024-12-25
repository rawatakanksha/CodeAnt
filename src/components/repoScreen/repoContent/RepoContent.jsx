import React from 'react'
import Data from './repoName.json'

function RepoContent({name,lang,status,memory,update}) {
  
  return (

   <>
   <li className=''>
    <div className=' border rounded-lg'>
        <div className='flex items-center '>
    <p className='m-2 ml-4 font-semibold'>{name}</p>
    <div className='rounded-xl border border-blue-500 bg-blue-200 text-sm h-6 w-12 flex justify-center  '>{status}</div>
    
    </div>
    <div className='flex items-center'>
    <p className='m-2 ml-4  text-sm'>{lang}</p>
    <div className='w-2 h-2 rounded border bg-blue-500'></div>
    <p className='m-2 ml-10  text-sm '>{memory}</p>
    <img src='../../../../public/database-icon-transparent-30.png'
    className='h-3'/>
    <p className='m-2 ml-10  text-sm '>{update}</p>
    </div>
    </div>
   </li>
   

   </>
  )
}

export default RepoContent