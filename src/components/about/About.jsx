import React, { useEffect } from "react"
import "./about.css"
import Habilities from "./Habilities"
import ScrollReveal from "scrollreveal"

const About = () => {
  useEffect(() => {
    const sr = ScrollReveal()

    sr.reveal(".title", {
      duration: 1000,
      origin: "top",
      distance: "100px",
      delay: 200,
    })

    sr.reveal(".underline", {
      duration: 1000,
      origin: "left",
      distance: "100px",
      delay: 300,
    })
  }, [])

  return (
    <section id="About" className="section-about">
      <h2 className="title">ABOUT</h2>
      <div className="underline"></div>
      <div className="container-content-about">
        <Habilities />
      </div>
    </section>
  )
}

export default About
