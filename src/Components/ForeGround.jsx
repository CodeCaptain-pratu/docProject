import { useRef } from 'react';
import React from 'react'
import Card from './Card'

function ForeGround() {
  const ref = useRef(null); // Initialize ref

  const data=[
    {
    desc:"This is the data of the card",
    fileSize:"0.9mb",
    close:true,
    tag:{
      isOpen:true,
      tagTitle:"Download Now",
      tagColor:"green",
    },
  },
  {
    desc:"This is the data of the card",
    fileSize:"0.9mb",
    close:true,
    tag:{
      isOpen:true,
      tagTitle:"Download Now",
      tagColor:"blue",
    },
  },
  {
    desc:"This is the data of the card",
    fileSize:"0.9mb",
    close:true,
    tag:{
      isOpen:true,
      tagTitle:"Upload",
      tagColor:"green",
    },
  },
];
  return (
    <div ref={ref} className='fixed z-[3] top-0 left-0 w-full h-screen bg-blue-600/200 flex gap-5 flex-wrap p-5'>
        {data.map((item,index)=>(
          <Card key={index} data={item} reference={ref}/>
        ))}
    </div>
  )
}

export default ForeGround