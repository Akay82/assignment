import React from 'react'
import Image from 'next/image'
import leftArrowImg from '../public/leftArrow.png'
import rightArrowImg from "../public/rightArrow.png"
import page3 from '../public/page3.png'
import technologyImg from '../public/technology.png'
import './styles/Page3.css'
const Page3 = () => {
  return (
  <>
  <div className="page3-heading">
  AGILE MODEL
  </div>


<div className="page3-box">

    <div className="page3-left-image">
        <Image src={page3} alt='/' />
    </div>

    <div className="page3-right-content">
                The Agile model is not limited to a single approach. It is a methodology that emphasizes adaptability and flexibility in software development. <br /> <br />
                 An Agile model follows the principles outlined in the Agile Manifesto and focuses on customer satisfaction, working software, and regular feedback.
                 Instead of working on a large project, the Agile model breaks it down into smaller increments that can be released to customers as they are completed.
    </div>

<div className="page3-center-line">

</div>
<div className="page3-bottom-line">
<Image src={leftArrowImg} alt='/' />


<div className="page3-right-img">
<Image src={rightArrowImg} alt='/' />
</div>
</div>

<div className="page3-bottom-center">

</div>

</div>



   <div className="page3-technology">
    <Image src={technologyImg} alt='/' />

    <div className="technology-all-content">
    <div className="technology-heading">
    Achieve Customization and Satisfaction with Stackkaroo's Carefully Crafted Web Solutions
    </div>
    <div className="technology-content">
    Consider Stackkaroo's trusted web development services for top-notch and cutting-edge web development solutions. Stackkaroo boasts a team of highly experienced and skilled web designers and developers who are dedicated to delivering high-quality and innovative websites.
    </div>

    <div className="technology-btn">
    Connect with our Experts Today!
    </div>
    </div>
    
   </div>
  </>
  )
}

export default Page3
