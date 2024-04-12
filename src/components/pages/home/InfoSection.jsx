import React from 'react'

const InfoSection = () => {
    return (
        <div className='bg-gray-900 py-20 px-3 lg:px-0'>
            <div className='lg:grid grid-cols-2 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
                <div className='col-span-1'>
                    <h1 className='text-white font-semibold text-5xl lg:text-[54px]'>
                        Better data. <br />
                        Lower cost. <br />
                        Infinite scale. <br />
                    </h1>
                </div>
                <div className='col-span-1 mt-12 lg:mt-0'>
                    <div>
                        <div className='pb-10 border-b-2 border-white text-white'>
                            <span className='font-semibold text-6xl'>10%</span> <br />
                            <span className='font-medium text-2xl'>higher data quality across 150+ data points</span>
                        </div>
                        <div className='py-10 border-b-2 border-white text-white'>
                            <span className='font-semibold text-6xl'>50%</span> <br />
                            <span className='font-medium text-2xl'>typical ROI result and only 30 days to implement</span>
                        </div>
                        <div className='py-10 border-b-2 border-white text-white'>
                            <span className='font-semibold text-6xl'>2.5M+</span> <br />
                            <span className='font-medium text-2xl'>calls completed and counting</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default InfoSection