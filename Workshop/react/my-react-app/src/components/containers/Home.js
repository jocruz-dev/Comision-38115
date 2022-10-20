import React from 'react'
import "../../styles/Home.css"
import slide1 from "../../assets/image-slide-1.jpg"

export default function Home() {
  return (
    <>
        <section class="mg slider-container">
            <figure>
                <img src={slide1} alt=""/>
                <img src={slide1} alt=""/>
                <img src={slide1} alt=""/>
                <img src={slide1} alt=""/>
            </figure>
        </section>
    </>
  )
}
