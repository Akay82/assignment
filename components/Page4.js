import React from 'react'
import Image from 'next/image'
import Img1 from '../public/page4-1.png'
import Img2 from '../public/page4-2.png'
import Img3 from '../public/page4-3.png'
import Img4 from '../public/page4-4.png'
import Img5 from '../public/page4-5.png'
import Img6 from '../public/page4-6.png'
import Img7 from '../public/page4-7.png'
import Img8 from '../public/page4-8.png'
import Img9 from '../public/page4-9.png'

import './styles/Page4.css'

const Page4 = () => {
  return (
  <>
  <div className="page4-heading">
  Why should you Choose Stackkaroo's Website Development Service?
  </div>
     
     <div className="page4-boxes">

    <div className="page4-box">
    Leading  Website Development company in India
    <Image src={Img1} alt="/" />
    </div>

    <div className="page4-box">
    Highly Competitive and Affordable Pricing Models
    <Image src={Img2} alt="/" />
    </div>

    <div className="page4-box">
    Customized   App Development Solutions
    <Image src={Img3} alt="/" />

    </div> 
   
    <div className="page4-box"  >
    Cashless, Secure and Multiple Payment Methods
    <Image src={Img4} alt="/" />
    </div>

    <div className="page4-box">
    Streamlined Operations, Post-Launch Support
    <Image src={Img5} alt="/" />
    </div>

    <div className="page4-box">
    Experienced, qualified team of Professionals
    <Image src={Img6} alt="/" />
    </div>

    <div className="page4-box">
    Reviews, Ratings & Social Media Integration
    <Image src={Img7} alt="/" />
    </div>

    <div className="page4-box">
    Enhanced Customer Satisfaction and Better Experience
    <Image src={Img8} alt="/" />
    </div>

    <div className="page4-box">
    Commitment to Quality and Timely Delivery
    <Image src={Img9} alt="/" />
    </div>

    </div>

    
</>
  )
}

export default Page4
