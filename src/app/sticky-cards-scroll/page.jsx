'use client'
import React, { useRef } from 'react'
import { projects } from '../../../data';
import Card from '@/components/card';
import { useScroll } from 'framer-motion';

export default function StickyCardsScroll() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end']
  });
  return (
    <main ref={targetRef} className='text-black flex min-h-screen relative mt-[50vh] w-full flex-col items-center justify-center'>
        {
            projects.map((project, index) => {
                const targetScale = 1 - ((projects.length - index) * 0.05);
                return <Card 
                  i={index} 
                  key={index} 
                  {...project} 
                  range={[index * 0.25, 1]} 
                  targetScale={targetScale}
                  progress={scrollYProgress}
                />
            })
        }
    </main>
  );
}
