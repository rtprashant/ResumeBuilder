import React from 'react'
import ResumeCards from './ResumeCards'
import firstImg from '../assets/Example1.png';
import secondImg from '../assets/Example2.jpg';
import thirdImg from '../assets/Example3.png';
import fourthImg from '../assets/Example4.png';
import fifthImg from '../assets/home2.jpg';
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Template() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const resumeCards = [
    { img: firstImg, templateId: 'SALES' },
    { img: secondImg, templateId: 'BUSINESS MANAGEMENT' },
    { img: thirdImg, templateId: 'MARKETING' },
    { img: fourthImg, templateId: 'ART DIRECTOR' },
    { img: fifthImg, templateId: 'GRAPHICS DESIGNER' },
  ];
  const totalCards = resumeCards.length;
  const visibleCards = 4;

  


  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalCards);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalCards) % totalCards);
  };

  const getDisplayedCards = () => {
    let displayedCards = [];
    for (let i = 0; i < visibleCards; i++) {
      displayedCards.push(resumeCards[(currentSlide + i) % totalCards]);
    }
    return displayedCards;
  };

  return (

    <div className="w-full  bg-[#264C42] pt-36 overflow-hidden relative">
    <h1 className="font-staatliches ml-[25vw] text-[4vw] text-white">OUR MOST POPULAR RESUME TEMPLATES</h1>
    <div className="flex justify-center mt-5">
      <div className="flex gap-10 whitespace-nowrap overflow-hidden w-full">
        {getDisplayedCards().map((card, index) => (
          
          <div key={index}
           className="w-[30%] flex  whitespace-nowrap" >
            
          <ResumeCards img={card.img} templateId={card.templateId} />
         
        </div>
      ))}
  
      </div>
      
    </div>
    <div className="flex text-slate-200 gap-5 pt-10 pb-10 justify-center w-full">
      <div className="text-[1.5vw]">
        <i className="fa fa-chevron-left" aria-hidden="true" onClick={prevSlide}></i>
      </div>
      <div className="flex items-center gap-5">
        {resumeCards.map((_, index) => (
          <i
            key={index}
            className={`fa-solid fa-circle ${index >= currentSlide && index < currentSlide + 1 ? <FontAwesomeIcon icon="fa solid fa-circle" />  : 'text-black   rounded-full  '}`}
          ></i>
        ))}
      </div>
      <div className="text-[1.5vw]">
        <i className="fa fa-chevron-right" aria-hidden="true" onClick={nextSlide}></i>
        
      </div>
    </div>
  </div>
  )
}

export default Template
