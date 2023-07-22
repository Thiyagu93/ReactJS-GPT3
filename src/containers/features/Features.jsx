import React from 'react'
import { Feature } from '../../components'
import './Features.css'

const Features = () => {

  const featuresData = [
    {
      title: "Improving end distrusts instantly",
      text: "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded."
    },
    {
      title: "Become the tended active",
      text: "Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.",
    },
    {
      title: "Message or am nothing",
      text: "Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.",
    },
    {
      title: "Really boy law county",
      text: "Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.",
    },
  ]
  return (
    <div className='gpt3__features section_padding' id='features'>
      <div className='gpt3__features-heading'>
          <h1 className='gradient__text'>
            The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.
          </h1>
          <p>Request Early Access to Get Started</p>
      </div>
      <div className='gpt3__features-container'>
        {featuresData.map((iteam, index)=>{
          return <Feature title={iteam.title} text={iteam.text} key={iteam.title + index}/>
        })}
      </div>
    </div>
  )
}

export default Features