import React from 'react'
import Work from './Work'
import { exp } from '../../data/config'
const Experiences = () => {
  return (
    <div className="container mx-auto bg-[#EEEEEE] text-center md:text-left rounded-lg p-12 text-black font-Poppins" id='exp'>
    <p className="text-3xl p-4 text-center">Experiences</p>
    <div className="">
      {exp.map((work, i)=>{
        return (
          <div>
          <Work 
            key={work.company}
            company={work.company}
            clogo={work.logo}
            title={work.title}
            type={work.type}
            start={work.startDate}
            end={work.endDate}
            duration={work.duration}
            location={work.location}
          />
          </div>
        )
      })}
    </div>
    </div>
    
  )
}

export default Experiences