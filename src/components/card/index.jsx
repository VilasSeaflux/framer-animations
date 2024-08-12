'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import React, { useRef } from 'react'

export default function Card({
    title,
    description,
    src,
    link,
    color,
    i,
    range,
    targetScale,
    progress,
}) {
    const targetRef = useRef(null);
    const {scrollYProgress} = useScroll({
        target: targetRef,
        offset: ['start end', 'start start']
    });

    const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
    const scale = useTransform(progress, range, [1, targetScale]);
  return (
    <div ref={targetRef} className='h-screen flex items-center justify-center sticky top-0'>
        <motion.div className='w-[1000px] h-[500px] relative rounded-2xl p-[50px]' style={{ backgroundColor: color, top: `calc(-10% + ${i * 25}px)`, scale }}>
            <div className='flex flex-col h-full overflow-hidden'>
                <h5 className='place-self-center text-2xl font-semibold font-mono'>{title}</h5>
                <div className='flex flex-row justify-between h-full'>
                    <div className='mt-3 w-2/3'>
                        <p className='p-5 text-xl text-justify tracking-widest'>{description}</p>
                    </div>
                    <div className='relative w-[60%] h-[100%] rounded-3xl overflow-hidden'>
                        <motion.div 
                            style={{scale: imageScale, width: '100%', height: '100%'}}
>
                            <Image
                                fill 
                                src={`/images/${src}`} 
                                alt={title} 
                                className='object-cover rounded-3xl'
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.div>
    </div>
  )
}
