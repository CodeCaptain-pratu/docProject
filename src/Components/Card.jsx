import React from 'react';
import { FaFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"



function Card({data,reference}) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} dragElastic={0.2} className='relative flex-shrink-0 w-60 h-72 bg-zinc-900/90 rounded-[45px] text-white px-8 py-10 overflow-hidden'>
        <FaFileAlt/>
        <p className='text-sm font-semibold mt-5 leading-tight'>{data.desc}</p>
        <div className='footer absolute bottom-0 left-0 w-full '>
            <div className='flex justify-between items-center mb-3 py-3 px-10'>
              <h5>{data.fileSize}</h5>
             <span className='w-7 h-7 bg-zinc-500 flex justify-center items-center rounded-full'>
              {data.close?<IoClose/>: <MdOutlineFileDownload color="#fff" size="0.9em"/>}
             </span>
            </div>
           {data.tag.isOpen?(
            <div className={`${data.tag.tagColor==="blue"?"bg-blue-600":"bg-green-600"} py-3 flex justify-center items-center'`}>
            <h5 className='text-sm font-semibold'>{data.tag.tagTitle}</h5>
          </div>
           ):null} 
        </div>
    </motion.div>
  )
}

export default Card