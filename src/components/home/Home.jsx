import React, { useEffect, useState, useRef } from "react"
import "./home.css"
import { motion } from "framer-motion"
import ScrollReveal from "scrollreveal"
import Blob from "./Blob"

const Home = () => {
  useEffect(() => {
    const sr = ScrollReveal()

    sr.reveal(".container-presentation", {
      duration: 1000,
      origin: "top",
      distance: "100px",
      delay: 400,
    })
  })

  return (
    <main id="home" className="container-main">
      <div className="container-home-content">
        <div className="container-presentation">
          <h1>
            Hola, soy Valentin Gonzalez <br />
            <span>Fullstack Developer</span>
          </h1>
        </div>
        <div className="container-animation">
          <Blob />
        </div>
      </div>
    </main>
  )
}

export default Home
