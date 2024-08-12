"use client"
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";


const IMG_PADDING = 12;

const TextContent = () => {
    return(
        <div className="bg-white">
            <TextParallaxContent
                subHeading='Collaborate'
                heading='Built for all of us.'
                img={'./nature-1.avif'}
            >
                <Content />
            </TextParallaxContent>
            <TextParallaxContent
                subHeading='Quality'
                heading='Never Compromise.'
                img={'./nature-2.avif'}
            >
                <Content />
            </TextParallaxContent>
            <TextParallaxContent
                subHeading='Modern'
                heading='Dress for the best'
                img={'./nature-3.avif'}
            >
                <Content />
            </TextParallaxContent>
        </div>
    );
};

const TextParallaxContent = ({img, subHeading, heading, children}) => {
    return (
        <div >
            <div className="relative h-[150vh]">
                <StickyPoster img={img} />
                <OverlayText heading={heading} subHeading={subHeading}/>
            </div>
            {children}
        </div>
    );
};

const StickyPoster = ({img}) => {
    const targetRef = useRef(null);
    const {scrollYProgress} = useScroll({
        target: targetRef,
        offset: ["end end", "end start"]
    });

    const scale = useTransform(scrollYProgress, [0.5, 1], [1, 0.7]);
    const opacity = useTransform(scrollYProgress, [0.8, 0], [1, 0]);
    return (
        <motion.div
            ref={targetRef}
            style={{
                backgroundImage: `url(${img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: `150vh`,
                scale,
            }}
            className="sticky z-0 overflow-hidden"
        >
            <motion.div 
            className="absolute inset-0 bg-neutral-950/70" style={{opacity}}/>
        </motion.div>
    );
};

const Content = () => {
    return (
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
            <h2 className="col-span-1 text-3xl font-bold md:col-span-4">Addition Content explaining the above card here</h2>
            <div className="col-span-1 md:col-span-8">
                <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
                    lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
                <p className="mb-8 text-xl text-neutral-600 md:text-2xl">
                    lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                </p>
                <button className="w-full rounded-none bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit">
                    Learn More &rarr;
                </button>
            </div>
        </div>
    )
}

const OverlayText = ({heading, subHeading}) => {
    const targetRef = useRef(null);
    const {scrollYProgress} = useScroll({
        target: targetRef,
        offset: ["0 1", "1 0"]
    });
    const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
    const opacity = useTransform(scrollYProgress, [0.1, 0.5, 0.75], [0, 1, 0]);
    return (
        <motion.div
            style={{
                y,
                opacity
            }}
            ref={targetRef} 
            className="absolute left-0 top-0 flex flex-col h-screen items-center justify-center w-full z-10 text-white"
        >
            <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">{subHeading}</p>
            <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
        </motion.div>
    )   
}


export default TextContent;