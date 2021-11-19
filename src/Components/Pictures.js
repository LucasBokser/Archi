import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import '../carousel.css'

function Pictures(){
    const baseUrl="http://react-responsive-carousel.js.org/assets/"
    const datas = [
        {
            id:1,
            image:`${baseUrl}1.jpeg`,
            title:"titre 1",
            text:`Lorem ipsum`
        },
        {
            id:2,
            image:`${baseUrl}2.jpeg`,
            title:"titre 2",
            text:`Lorem ipsum`
        },
        {
            id:3,
            image:`${baseUrl}3.jpeg`,
            title:"titre 3",
            text:`Lorem ipsum`
        }
    ]
    return(
        <Carousel
            autoPlay
            interval={4000}
            infiniteLoop
            thumbWidth={120}
            showIndicators={false}
            showStatus={false}
        >
        {datas.map((slide) => (
<div key={slide.id}>
    <img src={slide.image} />
    <div className="overlay">
        <h2 className="overlay_title">{slide.title}</h2>
        <p className="overlay_text">{slide.text}</p>
    </div>
</div>
        )
        )}
    </Carousel>
)
}
export default Pictures