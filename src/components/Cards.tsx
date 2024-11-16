import React from 'react'
import Image from 'next/image'
import "@/app/styles/card.css"
import { useState, useEffect } from 'react';

interface propsType {
    title: string,
    desc: string,
    img: string,
    tags: string[],
}

const Cards: React.FC<propsType> = ({title,desc,img,tags}) => {

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
      // Function to update `isSmallScreen` based on window width
      const handleResize = () => {
          setIsSmallScreen(window.innerWidth < 640);
      };

      // Call the function immediately and set up an event listener
      handleResize();
      window.addEventListener('resize', handleResize);

      // Clean up the event listener when the component is unmounted
      return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    <div className={`card ${window.innerWidth >= 640? 'card-sm' : ''}`} data-aos="zoom-out-up">
      <div>
        <Image className= {`card-image ${window.innerWidth >= 640? 'card-image-sm' : ''}`}
        src={img}
        width={350}
        height={350}
        alt={title}
        />
      </div>
      <div className='card-content'>
        <div className='card-title'>{title}</div>
        <div>{desc}</div>
        <div>
            {tags.map((el) => (
                <div className='card-tags' key={el}>
                    {el}
                </div>))}
        </div>
      </div>
    </div>
  )
}

export default Cards
