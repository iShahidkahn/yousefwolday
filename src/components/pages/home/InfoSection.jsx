import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

const InfoSection = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight;
            const sectionPosition = document.getElementById('info-section').offsetTop;
            const isSectionVisible = scrollPosition > sectionPosition;
            setIsVisible(isSectionVisible);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const headerAnimation = useSpring({
        from: { opacity: 0, transform: 'translateY(250px)' },
        to: { opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(250px)' },
        config: { duration: 1200 },
    });

    const contentAnimation = useSpring({
        from: { opacity: 0, transform: 'translateY(250px)' },
        to: { opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(250px)' },
        config: { duration: 1200, delay: 200 }, // Add delay for staggered animation
    });

    return (
        <div id="info-section" className='bg-gray-900 py-20 min-h-[640px] px-3 lg:px-0 relative mt-6 lg:mt-40'>
            <div className='lg:grid grid-cols-2 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
                <div className='col-span-1'>
                    <animated.h1 style={headerAnimation} className='text-white font-semibold text-5xl lg:text-[54px]'>
                        Better data. <br />
                        Lower cost. <br />
                        Infinite scale. <br />
                    </animated.h1>
                </div>
                <div className='col-span-1 mt-12 lg:mt-0'>
                    <div>
                        {isVisible && (
                            <>
                                <animated.div style={contentAnimation} className='pb-10 border-b-2 border-white text-white'>
                                    <span className='font-semibold text-6xl'>10%</span> <br />
                                    <span className='font-medium text-2xl'>higher data quality across 150+ data points</span>
                                </animated.div>
                                <animated.div style={contentAnimation} className='py-10 border-b-2 border-white text-white'>
                                    <span className='font-semibold text-6xl'>50%</span> <br />
                                    <span className='font-medium text-2xl'>typical ROI result and only 30 days to implement</span>
                                </animated.div>
                                <animated.div style={contentAnimation} className='py-10 border-b-2 border-white text-white'>
                                    <span className='font-semibold text-6xl'>2.5M+</span> <br />
                                    <span className='font-medium text-2xl'>calls completed and counting</span>
                                </animated.div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InfoSection;
