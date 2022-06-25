import React from 'react'

const Work = (props) => {
  return (
    <div className="w-full block max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 text-center p-10">
        <img className="rounded-t-lg p-2" src={props.clogo} alt="logo" />
        <p className="text-2xl p-2 font-bold">{props.company}</p>
        <p className="text-1xl p-2">{props.title} - <span className="text-sm">{props.type}</span></p>
        <p className="text-md">{props.start} - {props.end} <span className="text-sm">{props.duration}</span></p>
        <p className="text-sm">{props.location}</p>
    </div>
  )
  }

export default Work