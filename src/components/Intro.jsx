"use client";

import clsx from "clsx";
import { useEffect, useState } from "react"

const { FadeInStagger, FadeIn } = require("./FadeIn")

export default function Intro()  {
  const [logoColorChange, setLogoColorChange] = useState('bg-[transparent]') 
    const [bookNowColorChange, setBookNowColorChange] = useState('bg-[transparent] !text-[wheat]') 
    const [tagColorChange, setTagNowColorChange] = useState('bg-[transparent]') 
    const [logoPositionChange, setLogoPositionChange] = useState('min-[600px]:mt-[10%]')
    useEffect(() => {
      setTimeout(() => {setLogoColorChange("!transition  !duration-150 !transform delay-150  !text-[wheat] !text-5xl  md:text-[6em]  lg:!text-[7em] xl:!text-[9em] !max-w-3xl xl:!max-w-4xl !font-bold !signature-font !font-bold  animated-logo pb-12")}, 2030)
    }, [logoColorChange])
    useEffect(() => {
      setTimeout(() => {setLogoPositionChange('md:!max-[900px]:mt-[7.9%] min-[900px]:mt-[8.9%]  transition transform duration-150 ease-in-out fadeUp smooth !max-w-4xl')}, 2900)
    }, [logoPositionChange])
    useEffect(() => {
      setTimeout(() => {setBookNowColorChange("bg-black rounded-xl  !text-[#f8e8cd]  !border-[wheat]")}, 3100)
    }, [bookNowColorChange])
    useEffect(() => {
      setTimeout(() => {setTagNowColorChange("!text-[wheat] !text-lg ")}, 2400)
    }, [tagColorChange])
    useEffect(() => {
      setTimeout(() => {setBookNowColorChange("transition rounded-xl  duration-150 transform bg-black !text-[wheat]  !border-[#e9a72c]")}, 3600)
    }, [bookNowColorChange])
    useEffect(() => {
      setTimeout(() => {setBookNowColorChange("transition  !rounded-none  duration-150 transform bg-black !text-[wheat]  !text-[#e9a72c]")}, 4900)
    }, [bookNowColorChange])

    return <div className='absolute top-[44%] inset-x-0'>
    <FadeInStagger key={'INTRO'}>
    <FadeIn>
    <div className={`${logoPositionChange} section-header content-center  transition duration-150 transform home text-center wow fadeIn text-white max-w-3xl justify-centr mx-auto rs-parallax-wrap`}  style={{visibility:"visible", animationName:"fadeIn"}}>
    <div className="rs-parallax-wrap mb-4 inset-x-0 xl:!pb-24 "  style={{position: 'absolute' , display: 'block' ,'pointer-events': 'auto', 'z-index': 9, visibility: 'visible', perspective: '601px'}}>
     <h2 className={clsx(logoColorChange ? logoColorChange : 'rounded-xl','animation  inline-flex text-[wheat] text-3xl  lg:text-[wheat] md:text-[5em]  lg:text-[6em] xl:!text-[8em]  signature-font  animated-logo pb-12')}
     >
       MBEAUTé NOIR</h2>
     </div> 
     <div className='justify-center min-[700px]:hidden lg:text-3xl lg:text-[wheat] pt-14'>
    <p className={clsx(tagColorChange,'justify-center transition duration-250 transform text-sm text-white')}> NYC haircare specialist.</p>
     </div> 
     <div className='justify-center max-[700px]:hidden lg:text-3xl lg:text-[wheat]  sm:px-[20%]  md:max-w-3xl md:px-[20%]  pt-14  lg:pt-24  xl:!mt-24 lg:max-w-4xl lg:px-[10%] xl:max-w-7xl xl:px-[4%] xl:text-center'>
    <p className='transition duration-150 ease-in-out justify-center max-[700px]:hidden lg:text-3xl lg:text-[wheat]'> NYC haircare specialist located in Harlem. Our goal is to promote clean beauty. <span className='max-[700px]:hidden'>Where mindfulness and wellness meet consciousness. Glow inside and out with us! </span> </p>
     </div> 
     <div >
     <div className="justify-center flex align-center pt-2 lg:pt-10 ease-in duration-300">
        <a className={clsx( bookNowColorChange , " rounded-none  ClassicButton_button__ETGhE transition duration-150 transform btn text-white justify-center  hover:!bg-black flex align-center border-2  max-w-2xl m-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300")} href="https://mbeautehair.glossgenius.com/services">Book Now </a>
     </div>
     </div> 
  
    
    </div>
    </FadeIn>
    </FadeInStagger>
    </div>
  }


