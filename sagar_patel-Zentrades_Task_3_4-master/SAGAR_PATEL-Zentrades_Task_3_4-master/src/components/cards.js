import React from 'react'

export default function cards({key,e}) {
  return (

    <div
                key={key}
                className="w-1/5 m-2 shadow-lg h-[100px] flex justify-start items-center bg-white"
    >
                <div className="w-[10px] h-full bg-[#78BE43]"></div>
                <div className="mx-5 py-2 flex flex-col justify-between items-start h-full">
                  <div className="font-semibold text-xl">{Object.values(e)}</div>
                  <div className="font-semibold text-xl">{Object.keys(e)}</div>
                </div>
              </div>
  )
}
