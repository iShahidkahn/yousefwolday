import React, { useRef, useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSpring, animated } from 'react-spring';

import Slider from "react-slick";
// import Image from "next/image";
// import Link from "next/link";

const sliderData = [
  {
    image: "https://cdn.shortpixel.ai/spai/q_lossy+w_112+to_webp+ret_img/www.infinitus.ai/wp-content/uploads/2024/02/customer-headshot-bw-jeff-buck-cencora@2x-1.png",
    heading: "Cencora",
    info: (
      <p className="my-10 ">
        “Infinitus has helped us to support{" "}
        <strong>50% more patients at current staff levels</strong> by freeing
        up tens of thousands of hours per week. Our existing staff is able to
        spend more time with patients and is seeing{" "}
        <strong>significant productivity gains</strong> in their back office
        processes. The fact that we could launch something like this in{" "}
        <strong>less than 30 days</strong> is an anomaly in healthcare.”
      </p>
    ),
    name: "Sini Abraham",
    profile: `Sr. VP, Client Services + Operations
    Mercalis (formerly TrialCard)`,
  },
  {
    image: "https://cdn.shortpixel.ai/spai/q_lossy+w_112+to_webp+ret_img/www.infinitus.ai/wp-content/uploads/2024/02/customer-headshot-bw-sini-abraham@2x-1.png",
    heading: "Mercalis",
    info: (
      <p className="my-10 ">
        “Infinitus has helped us to support{" "}
        <strong>50% more patients at current staff levels</strong> by freeing
        up tens of thousands of hours per week. Our existing staff is able to
        spend more time with patients and is seeing{" "}
        <strong>significant productivity gains</strong> in their back office
        processes. The fact that we could launch something like this in{" "}
        <strong>less than 30 days</strong> is an anomaly in healthcare.”
      </p>
    ),
    name: "Sini Abraham",
    profile: `Sr. VP, Client Services + Operations
    Mercalis (formerly TrialCard)`,
  },
  {
    image: "https://cdn.shortpixel.ai/spai/q_lossy+w_112+to_webp+ret_img/www.infinitus.ai/wp-content/uploads/2024/02/customer-headshot-bw-sini-abraham@2x-1.png",
    heading: "Mercalis",
    info: (
      <p className="my-10 ">
        “Infinitus has helped us to support{" "}
        <strong>50% more patients at current staff levels</strong> by freeing
        up tens of thousands of hours per week. Our existing staff is able to
        spend more time with patients and is seeing{" "}
        <strong>significant productivity gains</strong> in their back office
        processes. The fact that we could launch something like this in{" "}
        <strong>less than 30 days</strong> is an anomaly in healthcare.”
      </p>
    ),
    name: "Sini Abraham",
    profile: `Sr. VP, Client Services + Operations
    Mercalis (formerly TrialCard)`,
  },
  {
    image: "https://cdn.shortpixel.ai/spai/q_lossy+w_112+to_webp+ret_img/www.infinitus.ai/wp-content/uploads/2024/02/customer-headshot-bw-sini-abraham@2x-1.png",
    heading: "Mercalis",
    info: (
      <p className="my-10 ">
        “Infinitus has helped us to support{" "}
        <strong>50% more patients at current staff levels</strong> by freeing
        up tens of thousands of hours per week. Our existing staff is able to
        spend more time with patients and is seeing{" "}
        <strong>significant productivity gains</strong> in their back office
        processes. The fact that we could launch something like this in{" "}
        <strong>less than 30 days</strong> is an anomaly in healthcare.”
      </p>
    ),
    name: "Sini Abraham",
    profile: `Sr. VP, Client Services + Operations
    Mercalis (formerly TrialCard)`,
  },
];

const CustomNextArrow = (props) => {
  const { className, style, onClick, sliderRef } = props;
  return (
    <button
      className={`custom-next-arrow ${className}`}
      style={{ ...style }}
      onClick={() => {
        onClick();
        sliderRef.current?.slickNext();
      }}
    >
      Next
    </button>
  );
};

const CustomPrevArrow = (props) => {
  const { className, style, onClick, sliderRef } = props;
  return (
    <button
      className={`custom-prev-arrow ${className}`}
      style={{ ...style }}
      onClick={() => {
        onClick();
        sliderRef.current?.slickPrev();
      }}
    >
      Previous
    </button>
  );
};

const CarouselSection = () => {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
      const handleScroll = () => {
          const scrollPosition = window.scrollY + window.innerHeight;
          const sectionPosition = document.getElementById('info-section2').offsetTop;
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


  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1200,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <CustomNextArrow sliderRef={sliderRef} />,
    prevArrow: <CustomPrevArrow sliderRef={sliderRef} />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 822,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 md:my-20 lg:mt-44 my-10">
      <div class="flex w-full flex-col md:flex-row md:justify-between items-start md:gap-12 lg:gap-20 my-10 lg:my-0">
        <div class="max-w-3xl flex-auto">
          <p class=" display-md tracking-tight font-semibold text-lg text-center lg:text-start lg:text-3xl">
            Meet the healthcare leaders seeing fast, real ROI with Infinitus
          </p>
        </div>
        <div class="flex w-full md:w-auto mt-6 md:mt-0 flex-col  md:flex-row gap-3 items-center">
          <a class="border-2 py-2 px-3 text-sm w-[200px] rounded-full text-center cursor-pointer border-black font-bold hover:bg-black hover:text-white duration-200"><span>See customer stories</span></a>
          <a class="border-2 py-2 px-3 text-sm w-[200px] rounded-full text-center cursor-pointer border-black bg-black text-white font-bold hover:bg-white hover:border-black hover:text-black duration-200">
            See for yourself
          </a>
        </div>
      </div>
      <div>
        <animated.div style={headerAnimation} className="md:my-14" id="info-section2">
          <Slider ref={sliderRef} {...settings} >
            {sliderData.map((slide, index) => {
              return (
                <div   key={index} className="carousel-img ">
                  {/* Image component removed */}
                  <div className="inner-box">
                    <h1 className="text-3xl">
                      {slide.heading}
                    </h1>
                    <p className="my-10 ">
                      {slide.info}
                    </p>
                    <p class="font-bold font-sans">
                      {slide.name}
                    </p>
                    <p class="text-base md:text-lg font-medium font-sans">
                      {slide.profile}
                    </p>
                  </div>
                  <div>
                    <div class="absolute w-20 md:w-28 h-20 md:h-28 -top-5 md:-top-8 right-4 md:right-6">
                      <img decoding="async" width="224" height="224" src={slide.image} data-spai="1" class="testimonial-photo testimonial-photo--static w-full h-full object-cover rounded-full shadow-lg" alt="Jeff Buck of Cencora" data-spai-orig-obs="true" data-spai-lazy-loaded="true" data-spai-width="112" data-spai-height="112" />
                    </div>
                    <img src="" alt="" />
                  </div>
                </div>
              );
            })}
          </Slider>
        </animated.div>
      </div>
      <div className="custom-buttons -mt-14 ms-3">
        <button onClick={() => sliderRef.current?.slickPrev()} className="arrow p-2 me-5">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
          </svg>
        </button>
        <button onClick={() => sliderRef.current?.slickNext()} className="arrow p-2">
          {/* Image component removed */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CarouselSection;
