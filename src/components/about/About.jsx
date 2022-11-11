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

    sr.reveal(".container-description", {
      duration: 1000,
      origin: "left",
      distance: "100px",
      delay: 400,
    })
  }, [])

  return (
    <section id="About" className="section-about">
      <h2 className="title">ABOUT</h2>
      <div className="underline"></div>
      <div className="container-content-about">
        <Habilities />
      </div>
      <div className="container-about-me">
        <div className="container-description">
          <p className="description">
            <span>
              Im a FullStack Developer with a passion for learning new
              technologies and creating new things.{" "}
            </span>
            Im so enthusiastic about the web development and i love backend too.
            I have a lot of experience with React, Node, Express, MongoDB,
            MySQL, and more.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
