import React from 'react'
import Image from 'next/image'
import pageImg from '../public/page1.png'
import './styles/Page1.css'
const Page1 = () => {
  return (
    <>
    <div className='page1'>

     <div className="page1-left">
        <p>Boost Your Web Development <br /> Success with Stackkaroo's </p>
        <div className="page1-left-heading">PROJECT EXECUTION MODEL</div>
         <div className="page1-left-btn">Let’s Discuss</div>
        </div> 

        <div className="page1-img">
          <Image src={pageImg} alt="img" />
        </div>

        <div className="page1-features">
            <div className="page1-list">
             • Flexible
            </div>
            <div className="page1-list">
            • Client-Centic
                </div>
                <div className="page1-list">
                • Balanced
                </div>
               
        </div>
        <div className="page1-bottom">
                Every project is one-of-a-kind, which means it needs to be treated with care and attention. In addition to considering the cost, time, and scope, the relationship between the client and the agency is also crucial in maintaining a balance.
                </div>
    </div>

 
    </>
  )
}

export default Page1
