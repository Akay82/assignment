"use client";
import React, { useState } from 'react'
import Image from 'next/image'
import './styles/Faq.css'
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import faq from  '../public/faq.png'

const Faq = () => {
     
    
  return (
    <>
    <div className="faq-top-header">
    FAQs
    </div>
      <div className='faq'>

      <Accordion className="faq-top">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon  className='faq-icon'/>}
          aria-controls="panel1-content"
          id="panel1-header"
          className='faq-heading'
        >
        What are Stackkaroo's Project Execution Models?
        </AccordionSummary>
        <AccordionDetails className='faq-content'>
        Stackkaroo's Project Execution Models are a group of rules and methods made to simplify web development projects.
         These models give a clear way to plan, carry out and finish projects. This makes sure they are successful and done well.
        </AccordionDetails>
      </Accordion>

      <Accordion className="faq-top">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className='faq-icon'/>}
          aria-controls="panel2-content"
          id="panel2-header"
          className='faq-heading'
        >
          What is the best project execution model for web development?
        </AccordionSummary>
        <AccordionDetails  className='faq-content'>
        The way we do a project can change based on things like its needs, how many people are on the team, time limits and what the client wants.
        But, for projects with clear and steady needs, the Waterfall method can also work well. We must check what each project needs before picking the best model for it.
        </AccordionDetails>
      </Accordion>

      <Accordion className="faq-top">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className='faq-icon' />}
          aria-controls="panel3-content"
          id="panel3-header"
          className='faq-heading'
        >
      How do Stackkaroo's Project Execution Models help with my web development projects?
        </AccordionSummary>
        <AccordionDetails  className='faq-content'>
        Stackkaroo's Project Execution Models help manage projects in a step-by-step way. This makes it easier to organize, talk to others well, and be more productive. 
        Use these examples to make sure your website projects finish on time, within the money limits and make the client happy.
        </AccordionDetails>
        
      </Accordion>

      <Accordion className="faq-top">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon  className='faq-icon'/>}
          aria-controls="panel3-content"
          id="panel3-header"
          className='faq-heading'
        >
    Can Stackkaroo's Project Execution Models be used for all kinds of web development projects?
        </AccordionSummary>
        <AccordionDetails   className='faq-content'>
        Yes, Stackkaroo's Project Models are made to change and fit different types of web projects. If you're making a little website or a big web app, these models can be changed to match your special project needs.
        </AccordionDetails>
        
      </Accordion>

      <Accordion className="faq-top">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon  className='faq-icon'/>}
          aria-controls="panel3-content"
          id="panel3-header"
          className='faq-heading'
        >
     How do Stackkaroo's Project Execution Models help in reducing risks in projects?
        </AccordionSummary>
        <AccordionDetails  className='faq-content'>
        Stackkaroo's Project Execution Models have risk management tactics. These help you find problems early and create plans for what to do if they happen. By dealing with problems before they happen, you can lessen their effects on your website building projects and make them run smoother.
        </AccordionDetails>
        
      </Accordion>


      <Accordion className="faq-top">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className='faq-icon'/>}
          aria-controls="panel3-content"
          id="panel3-header"
          className='faq-heading'
        >
     Can Stackkaroo's  Execution Models combined with current project management tools?
        </AccordionSummary>
        <AccordionDetails className='faq-content'>
        Yes, Stackkaroo's Project Execution Models can easily be connected with well-known project management tools like Jira, Trello or Asana. This mixing helps teamwork, job tracking and progress check. It makes projects do better.
        </AccordionDetails>
        
      </Accordion>

    </div>
    
    </>
  )
}

export default Faq
