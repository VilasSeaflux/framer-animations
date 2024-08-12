'use client'
import { useScroll, motion, useTransform } from "framer-motion";
import React, { useRef } from "react";

const TextGradient = () => {
    return (
        <main className="bg-black ">
            <div className="h-screen" />
            <Words paragraph="Apple Vision Pro can transform any room into your own personal theater. Expand your movies, shows, and games to your perfect size and experience them in Spatial Audio. Apple Immersive Video puts you in the center of the action with mind‑blowing immersion" />
            <div className="h-screen " />
        </main>
    );
};

const Words = ({ paragraph }) => {
    const elementRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: elementRef,
        offset: ['start 0.9', 'start 0.25']
    });
    const words = paragraph.split(' ');
    return (
        <p  
            ref={elementRef}
            className="text-5xl h-[50vh] flex flex-row flex-wrap max-w-[1280px] text-white"
        >
            {
                words.map((word, index) => {
                    const start = index / words.length;
                    const end = start + (1 / words.length);
                    return <Word key={index} range={[start, end]} progress={scrollYProgress}>{word}</Word>
                })
            }
        </p>
    );
}

const Word = ({children, range, progress}) => {
        const opacity = useTransform(progress, range, [0, 1]);
        return(
            <span className="text-4xl mr-3 text-white relative">
            <span className="text-4xl text-white absolute opacity-20">{children}</span>
            <motion.span 
                style={{opacity}} 
            >
                {children}
            </motion.span>
            </span>
        ) 
}
export default TextGradient;

