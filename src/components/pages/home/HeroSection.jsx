import React from 'react'

const HeroSection = () => {
    return (
        <div className='hero flex justify-center items-center'>
            <div className='py-2'>
                <div className='flex justify-center my-4 mt-10 lg:my-10'>
                    <div class="pt-0 md:pt-0 lg:pt-0 pb-0 md:pb-0 lg:pb-0  md:inline-flex">
                        <a href="/#" target="_self" class="pl-1 pr-[10px] rounded-full py-1 bg-gray-200 items-center inline-flex">
                            <span class="rounded-full bg-white py-[2px] px-3 text-sm leading-none md:leading-tight font-medium text-gray-900">
                                New <i class="fa-regular fa-sparkles" aria-hidden="true"></i>
                            </span>
                            <span class="text-sm leading-[1.14] md:leading-tight font-medium ml-3 flex items-center gap-1">Key takeaways from Blizzard ’24<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
                            </span>
                        </a>
                    </div>
                </div>
                <h1 className="lg:max-w-5xl mx-auto w-full mt-0 lg:mt-12 text-3xl lg:text-[54px]">
                    Transforming healthcare. <br />
                    One call at a time.
                </h1>
                <p className='text-xl pt-4 lg:pt-6 text-center pb-6 lg:pb-12'>
                    AI that talks to insurance, PBMs, and <br className='lg:hidden' /> pharmacies so you don’t have to.
                </p>
                <div className='flex justify-center pb-12'>
                    <button className='bg-black text-sm font-medium text-white border-2 hover:bg-white hover:text-black hover:border-2 border-black rounded-full py-3 px-5 duration-200'>
                        Get in touch
                    </button>
                </div>
                <div className='pb-12 pt-16'>
                    <p className='text-center text-lg pb-2 font-semibold'>Who we call:</p>
                    <div className='flex gap-5 justify-center items-center'>
                        <div className='w-32 h-28 '>
                            <img fetchpriority="high" width="260" height="260" src="https://cdn.shortpixel.ai/spai/q_lossy+w_128+to_webp+ret_img/www.infinitus.ai/wp-content/uploads/2023/06/CompanyCarelonRx-Typefull-mark-OrientationSquare-ColorBlack@2x.png" class="object-contain w-auto h-32" alt="carelon logo" />
                        </div>
                        <div className='w-32 h-28 '>
                            <img fetchpriority="high" width="260" height="260" src="https://cdn.shortpixel.ai/spai/q_lossy+w_128+to_webp+ret_img/www.infinitus.ai/wp-content/uploads/2023/05/united-healthcare.png" class="object-contain w-auto h-32" alt="carelon logo" />
                        </div>
                        <div className='w-32 h-28 '>
                            <img fetchpriority="high" width="260" height="260" src="https://cdn.shortpixel.ai/spai/q_lossy+w_128+to_webp+ret_img/www.infinitus.ai/wp-content/uploads/2023/05/bluecross-blueshied.png" class="object-contain w-auto h-32" alt="carelon logo" />
                        </div>
                        <div className='w-32 h-28 '>
                            <img fetchpriority="high" width="260" height="260" src="https://cdn.shortpixel.ai/spai/q_lossy+w_128+to_webp+ret_img/www.infinitus.ai/wp-content/uploads/2023/06/CompanyCarelonRx-Typefull-mark-OrientationSquare-ColorBlack@2x.png" class="object-contain w-auto h-32" alt="carelon logo" />
                        </div>
                        <div className='w-32 h-28 '>
                            <img fetchpriority="high" width="260" height="260" src="https://cdn.shortpixel.ai/spai/q_lossy+w_128+to_webp+ret_img/www.infinitus.ai/wp-content/uploads/2023/05/united-healthcare.png" class="object-contain w-auto h-32" alt="carelon logo" />
                        </div>
                        <div className='w-32 h-28 '>
                            <img fetchpriority="high" width="260" height="260" src="https://cdn.shortpixel.ai/spai/q_lossy+w_128+to_webp+ret_img/www.infinitus.ai/wp-content/uploads/2023/05/bluecross-blueshied.png" class="object-contain w-auto h-32" alt="carelon logo" />
                        </div>
                        <div className='w-32 h-28 '>
                            <img fetchpriority="high" width="260" height="260" src="https://cdn.shortpixel.ai/spai/q_lossy+w_128+to_webp+ret_img/www.infinitus.ai/wp-content/uploads/2023/06/CompanyCarelonRx-Typefull-mark-OrientationSquare-ColorBlack@2x.png" class="object-contain w-auto h-32" alt="carelon logo" />
                        </div>
                        <div className='w-32 h-28 '>
                            <img fetchpriority="high" width="260" height="260" src="https://cdn.shortpixel.ai/spai/q_lossy+w_128+to_webp+ret_img/www.infinitus.ai/wp-content/uploads/2023/05/united-healthcare.png" class="object-contain w-auto h-32" alt="carelon logo" />
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default HeroSection