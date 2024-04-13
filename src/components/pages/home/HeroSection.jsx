import React from 'react'
import { useSpring, animated } from 'react-spring';


const HeroSection = () => {


    const headerAnimation = useSpring({
        from: { opacity: 0, marginTop: -100 },
        to: { opacity: 1, marginTop: 0 },
        config: { duration: 1000 },
    });

    const badgeAnimation = useSpring({
        from: { opacity: 0, transform: 'translateY(-20px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
        config: { duration: 800, delay: 600 },
    });

    const buttonAnimation = useSpring({
        from: { opacity: 0, transform: 'translateY(20px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
        config: { duration: 800, delay: 600 },
    });

    return (
        <section
            className="block-centered-hero pt-28 md:pt-40 lg:pt-32 pb-5 md:pb-0 lg:pb-0 relative bg-white"
        >
            <div className="bg-centered-hero">
                <video autoPlay muted loop playsInline preload="none">
                    <source src="./gradient.mp4" type="video/mp4" />
                </video>
            </div>

            <div className="container z-20 relative text-center">
                <animated.div style={badgeAnimation}>
                    <div className="primitive-element  primitive-element-badge relative pt-0 md:pt-0 lg:pt-0 pb-0 md:pb-0 lg:pb-0 inline-flex ">
                        <a href="/#" target="_self" className="pl-1 pr-[10px] rounded-full py-1 bg-gray-200 items-center inline-flex">
                            <span className="rounded-full bg-white py-[2px] px-3 text-sm leading-none md:leading-tight font-medium text-gray-900">
                                New <i className="fa-regular fa-sparkles"></i>
                            </span>
                            <span className="text-sm leading-[1.14] flex items-center gap-1 md:leading-tight font-medium ml-3">
                                Key takeaways from Blizzard
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                </svg>
                            </span>
                        </a>
                    </div>
                </animated.div>

                <div className="max-w-5xl mx-auto w-full mt-6 md:mt-12">
                    <animated.h1 style={headerAnimation} className="display-xl text-[54px] font-semibold font-lm relative">
                        Transforming healthcare.<br /> One call at a time.
                    </animated.h1>
                </div>
                <div className="max-w-3xl mx-auto w-full md:px-2 pt-6 pb-12">
                    <p className="text-xl tracking-bit">
                        AI that talks to insurance, PBMs, and pharmacies so you don’t have to.
                    </p>
                </div>

                <animated.div style={buttonAnimation}>
                    <div className="relative">
                        <div className='flex justify-center pb-12'>
                            <button className='bg-black text-sm font-medium text-white border-2 hover:bg-white hover:text-black hover:border-2 border-black rounded-full py-3 px-5 duration-200'>
                                Get in touch
                            </button>
                        </div>
                    </div>
                </animated.div>

             
            </div>
        </section>

    )
}

export default HeroSection