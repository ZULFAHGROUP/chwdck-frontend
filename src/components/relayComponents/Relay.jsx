import React from 'react'
import '../RelayStyles/relay.css'
import Button from '../relayShared/button/Button'
import googlePlayStore from '../../components/relayComponents/relayAssets/googlePlayStore.svg'
import appleStore from '../../components/relayComponents/relayAssets/appleStore.svg'
import boxOne from '../../components/relayComponents/relayAssets/boxOne.svg'
import heroThunder from '../../components/relayComponents/relayAssets/heroThunder.svg'
import Carousel from './Carousel'
import { cards } from './cards'
import cardThree from '../../components/relayComponents/relayAssets/cardThree.svg'
import cardTwo from '../../components/relayComponents/relayAssets/cardTwo.svg'
import cardOne from '../../components/relayComponents/relayAssets/cardOne.svg'
// import batonReceiver from '../../components/relayComponents/relayAssets/batonReceiver.svg'
// import batonGiver from '../../components/relayComponents/relayAssets/batonGiver.svg'
import boxCarrier from '../../components/relayComponents/relayAssets/boxCarrier.svg'
import manPackage from '../../components/relayComponents/relayAssets/manPackage.svg'
import starLike from '../../components/relayComponents/relayAssets/starLike.svg'
import AutoPlay from './slider/AutoPlay'
import pearl from '../../components/relayComponents/relayAssets/pearl.svg'
import halfMoon from '../../components/relayComponents/relayAssets/halfMoon.svg'
import star from '../../components/relayComponents/relayAssets/star.svg'




const Relay = () => {


  return (
    
    <>

<div className="text-center background_container">
    <h1 className="text-5xl md:text-6xl lg:text-[112px] font-bold mb-6 lg:leading-[144.93px]">
      <span className="block">Delivery</span>
      <span className="block">On-The-Go</span>
   </h1>
   <h2 className='lg:text-xl mb-10'>Send and receive packages easily with Relay!</h2>
   <div className='flex flex-col md:flex-row items-center justify-center md:gap-4'>

  <Button image={googlePlayStore} text='Download on Google Playstore'/>
  <Button  image={appleStore} text='Download on Applestore'/>
  </div>
  <span className='flex flex-col items-center relative'>
    <div className='w-[80%] lg:w-1/2 mt-20 relative z-50'> 
    <img src={boxOne} alt="" />
    </div>
    <div  className='absolute bottom-12 w-full z-20'>
      <img src={heroThunder} alt="" /> 
    </div>
  </span>
  
</div>

<h3 className='font-sans font-medium pl-5 mt-20 md:mt-8 lg:mt-28 text-2xl md:text-[64px] md:font-bold'>How Relay Works</h3>
{/* <div className='flex flex-row mt-20 space-x-10 items-center'>
      <div  className='w-[15%] bg-[pink] h-[30vh]'>
      <h2>first card</h2>
    </div>
    <div className='flex flex-row w-[70%] bg-[blue] h-[60vh]'>
      <div className='w-[50%]'>
      <h2>second card</h2>
      </div>
      <div className='w-[50%] bg-[red] '>
      <h2>extra</h2>
      </div>
      
    
    </div>
    <div className='w-[15%] bg-[green] h-[30vh]'>
      <h2>third card</h2>
    </div>
</div> */}
<div className="mt-24 ">
<Carousel cards={cards} interval={3000} />
</div>

{/* <div style={{ backgroundColor: 'rgb(153, 0, 56)' }} className='mt-20 relative z-30 flex flex-col justify-center items-center lg:mb-[50px] min-h-[200px] lg:min-h-[500px]'>
<h3 className=' text-white text-center text-5xl font-bold leading-[48px] not-italic pt-24 mb-20'>
  <span className='text-[pink]'>You need it?</span> <br />
  We'll bring it!
</h3>
<div style={{ translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0px)'}}>
  <div style={{boxSizing:'border-box', display:'block', overflow:'hidden', width:'initial', height:'initial', background:'none', opacity:'1',border:'0',padding:'0',margin:'0', position:'absolute', inset:'0'}}>
    <img src={cardThree} alt="" className='absolute transform rotate-3 z-3'/>
  </div>
</div>
<div >
  <div>
    <img src={cardTwo} alt="" className='absolute transform z-2'/>
  </div>
</div>
<div>
  <div>
    <img src={cardOne} alt="" className='absolute  transform -rotate-3 z-1'/>
  </div>
</div>
</div> */}


{/* <div style={{ backgroundColor: 'rgb(153, 0, 56)' }}>
<div  className='mt-20'>
<h3 className=' text-white text-center text-5xl font-bold leading-[48px] not-italic pt-24 mb-20'>
  <span className='text-[pink]'>You need it?</span> <br />
  We'll bring it!
</h3>
</div>

<div>
  <div>
    <img src={cardThree} alt="" className='absolute transform rotate-3 z-3'/>
  </div>
</div>
<div >
  <div>
    <img src={cardTwo} alt="" className='absolute transform z-2'/>
  </div>
</div>
<div>
  <div>
    <img src={cardOne} alt="" className='absolute  transform -rotate-3 z-1'/>
  </div>
</div>
</div> */}

<div style={{ backgroundColor: 'rgb(153, 0, 56)' }} className='h-[30rem] lg:h-[60rem]'>
  <div  className='mt-20'>
<h3 className=' text-white text-center text-5xl font-bold leading-[48px] not-italic pt-24 mb-20'>
  <span className='text-[pink]'>You need it?</span> <br />
  We'll bring it!
</h3>
</div>
  <div className='flex justify-center relative'>
    <img src={cardOne} alt="" className='absolute transform rotate-3 z-1 lg:w-[631.66px] lg:h-[500px]' />
    <img src={cardTwo} alt="" className='absolute transform z-2 lg:w-[631.66px] lg:h-[500px]'/>
    <img src={cardThree} alt="" className='absolute transform -rotate-3 z-3 lg:w-[631.66px] lg:h-[500px]' />
  </div>
</div>

<div className='BatonGiver-et-BatonReciever flex justify-center gap-4 mt-0 ' style={{ backgroundColor: 'rgb(153, 0, 56)' }}>
  <div className='w-[50px] h-[45px] overflow-hidden flex items-center justify-center bg-[pink] rounded-full'>
     <a href="#"><img src={googlePlayStore} alt="" className='w-[24px] h-[23px]' /></a>
  </div>

  <div className='w-[50px] h-[45px] overflow-hidden flex items-center justify-center bg-[pink] rounded-full'>
     <a href="#"><svg stroke="currentColor" fill="black" stroke-width="0" width='24px' height='23px' viewBox="0 0 1024 1024" class="mr-1.5" xmlns="http://www.w3.org/2000/svg"><path d="M747.4 535.7c-.4-68.2 30.5-119.6 92.9-157.5-34.9-50-87.7-77.5-157.3-82.8-65.9-5.2-138 38.4-164.4 38.4-27.9 0-91.7-36.6-141.9-36.6C273.1 298.8 163 379.8 163 544.6c0 48.7 8.9 99 26.7 150.8 23.8 68.2 109.6 235.3 199.1 232.6 46.8-1.1 79.9-33.2 140.8-33.2 59.1 0 89.7 33.2 141.9 33.2 90.3-1.3 167.9-153.2 190.5-221.6-121.1-57.1-114.6-167.2-114.6-170.7zm-105.1-305c50.7-60.2 46.1-115 44.6-134.7-44.8 2.6-96.6 30.5-126.1 64.8-32.5 36.8-51.6 82.3-47.5 133.6 48.4 3.7 92.6-21.2 129-63.7z"></path></svg>
  </a>
</div>
</div>

{/* batons */}
{/* <div className='relative w-full'>
  <div className='abolute  w-[50%] -m-[10rem]'>
    <img src={batonReceiver} alt="" />
  </div>

  <div  className='abolute right-[-20px] w-[50%]'>
    <img src={batonGiver} alt="" />
  </div>
</div> */}


 {/* <div className='background_containersse relative'>
        <img src={batonReceiver} alt="baton receiver" className='absolute left-0 top-0 w-full h-full' />
        <img src={batonGiver} alt="baton giver" className='absolute right-0 bottom-0 w-full h-full' />
      </div> */}

<div className='mx-auto px-[1rem] pt-16'  style={{ backgroundColor: 'rgb(153, 0, 56)' }}>
<div className="grid lg:grid-cols-2 lg:gap-32"  >
  <div className='flex items-center relative '>
  <span className='relative z-10 leading-tight text-6xl text-[white] '>
        chowdeck <br /> has <br />you covered
      </span>
      <span className='lg:absolute -ml-4 -right-8 md:right-10 bottom-0'>
        <img src={manPackage} alt=""  className='w-40 md:w-[230px] lg:w-[150px] h-full'/>
      </span>
  </div>
      <p className='text-sm md:text-lg lg:text-2xl mt-4 text-[white] '>Say goodbye to harrowing deliveries and say hello to quick and easy deliveries.Relay is here! Download the app and let's get racing!
      </p>
</div>
</div>


{/* MARQUEE */}

{/* <marquee width="100%" direction="left" height="100px">
<div className="flex">
<div className='flex w-[16rem] gap-2 rounded border-blue-500' >
  <img src={starLike} alt="" />
  <h2>Live updates on deliveries</h2>
</div>
<div className='flex w-[16rem] gap-2 rounded border-blue-500' >
  <img src={starLike} alt="" />
  <h2>Live updates on deliveries</h2>
</div>
<div className='flex w-[16rem] gap-2 rounded border-blue-500' >
  <img src={starLike} alt="" />
  <h2>Live updates on deliveries</h2>
</div>
<div className='flex w-[16rem] gap-2 rounded border-blue-500' >
  <img src={starLike} alt="" />
  <h2>Live updates on deliveries</h2>
</div>
</div>
</marquee> */}

<div style={{ backgroundColor: 'rgb(153, 0, 56)' }}>
{/* <marquee behavior="scroll" direction="left">
<div className="flex justify-between marquee-container ">
  <div className='marquee-item'>
  <div className='flex w-[18rem] items-center justify-center gap-2 rounded bg-[#a31a4c] text-[#e1b5c4]' >
  <img src={starLike} alt=""  style={{ fill: '#8c77ec' }} />
  <h2 className='text-base font-semibold' >Live updates on deliveries</h2>
</div>
  </div>

<div className='marquee-item'>
<div className='flex w-[18rem] items-center justify-center gap-2 rounded bg-[#a31a4c] text-[#e1b5c4]' >
  <img src={pearl} alt=""  style={{ fill: '#8c77ec' }} />
  <h2 className='text-base font-semibold' style={{border:'5px red'}}>Highly-rated and vetted riders</h2>
</div>
</div>

<div className='marquee-item'>
<div className='flex w-[18rem] items-center justify-center gap-2 rounded bg-[#a31a4c] text-[#e1b5c4]' >
  <img src={halfMoon} alt=""  style={{ fill: '#8c77ec' }} />
  <h2 className='text-base font-semibold' style={{border:'5px red'}}>24/7 support for customers</h2>
</div>
</div>

<div className='marquee-item'>
<div className='flex w-[18rem] items-center justify-center gap-2 rounded bg-[#a31a4c] text-[#e1b5c4]' >
  <img src={star} alt=""  style={{ fill: '#8c77ec' }} />
  <h2 className='text-base font-semibold' style={{border:'5px red'}}>Quick and easy onboarding</h2>
</div>
</div>
</div>
</marquee> */}
<AutoPlay/>
</div>









      








</>

  )
}

export default Relay