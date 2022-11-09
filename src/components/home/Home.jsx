import React, { useEffect, useState, useRef } from "react"
import "./home.css"
import { motion } from "framer-motion"
import ScrollReveal from "scrollreveal"
import Blob from "./Blob"
import Escritorio from "./Escritorio"
import HomeLine from "../../assets/home-line.png"
import UserLine from "../../assets/user-fill.png"

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
      <div className="container-line">
        <svg
          width="350"
          height="399"
          viewBox="0 0 350 399"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M335.856 7.26282C-102.137 38.9061 23.5395 177.15 8 398"
            stroke="#51268F"
            stroke-width="3.4"
          />
          <circle
            cx="343"
            cy="7"
            r="6"
            fill="#13131A"
            stroke="#51268F"
            stroke-width="2"
          />
        </svg>
        <div className="container-home-icon">
          <div className="icon">
            <img className="home-icon-line" src={HomeLine} alt="" />
          </div>
        </div>
        <motion.div
          initial={{ width: 4, height: 0 }}
          whileInView={{ width: 4, height: 850 }}
          viewport={{ once: true }}
          transition={{ duration: 3, delay: 2 }}
          className="line-about"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 5 }}
          className="container-home-icon"
        >
          <div className="icon">
            <img className="user-icon-line" src={UserLine} alt="" />
          </div>
        </motion.div>
      </div>
      <div className="container-home-content">
        <div className="container-presentation">
          <h1>
            Hi, I'm Valentin Gonzalez <br />
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
