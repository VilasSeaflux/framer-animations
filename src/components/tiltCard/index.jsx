import React from 'react'

export default function TiltCard() {
  return (
    <div style={{
        transformStyle: 'preserve-3d',  
    }} className='relative h-96 w-72 rounded-xl bg-gradient-to-br from-indigo-300 to-violet-300'>
        <div
            style={{
                transform: 'translateZ(75px)',
                transformStyle: 'preserve-3d',
            }}
            className='absolute inset-4 grid place-content-center rounded-xl bg-white shadow-lg'>

        </div>
    </div>
  )
}
