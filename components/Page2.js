import React from 'react'
import Image from 'next/image'
import agileImg from '../public/agile.png'
import DevOpsImg from '../public/devops.png'
import iteraiveImg from '../public/iterative.png'
import waterfallImg from '../public/waterfall.png'
import dockerImg from '../public/docker.png'
import jsImg from '../public/js.png'
import page2Img from '../public/page2.png'
import './styles/Page2.css'
const Page2 = () => {
  return (
    <>
    <div className='box'>


        <div className="page2-content">
      <div className="page2-heading">
      TYPES
      </div>
      <div className='page2-para'>Requirements, Scope, <br />  Functionalities and  Utilization</div>
      </div>

      <div className="page2-right-content">
        <div className="page2-right-heading">
            50+ </div> <br /> 
            <div className='page2-right-text'>Businesses were introduced last year on Digital Platform</div>
            

            <div className="page2-right-heading">
            4.6  </div> <br /> 
            <div className='page2-right-text'> Rating on Google by our Trusted Clients</div>
           

            <div className="page2-right-heading">
            20+</div> <br />  
            <div className='page2-right-text'>Positive Reviews on Glassdoor</div>
            
      </div>

      <div className="page2-features">

      <div className="page2-list">
        <Image src={agileImg} alt='/' /> Agile Model
      </div>
      <div className="page2-line"></div>

      <div className="page2-list">
      <Image src={DevOpsImg} alt='/' /> DevOps Model
      </div>
      <div className="page2-line"></div>


      <div className="page2-list">
      <Image src={iteraiveImg} alt='/' /> Iterative Model
      </div>
      <div className="page2-line"></div>

      <div className="page2-list">
      <Image src={waterfallImg} alt='/' /> Waterfall Model
      </div>

      </div>

     <div className="left-side">

     </div>
     <div className="bottom-line">
      <Image src={dockerImg} alt='/' />
     </div>
     <div className="right-line">
     <Image src={jsImg} alt='/' />
     </div>
     <div className="center-line">

     </div>
    </div>

    <div className="page2-image">
        <Image src={page2Img} alt='/' />
    </div>
    </>
  )
}

export default Page2
