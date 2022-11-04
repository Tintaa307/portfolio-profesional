import React, { useEffect } from "react"
import "./about.css"
import ScrollReveal from "scrollreveal"

const data = [
  {
    id: 1,
    title: "Fast",
    ref: "first",
    description:
      "Fast load times and lag free interaction, my highest priority.",
    icon: "ri-timer-flash-line",
  },
  {
    id: 2,
    title: "Responsive",
    ref: "second",
    description: "My layouts will work on any device, big or small.",
    icon: "ri-device-line",
  },
  {
    id: 3,
    title: "Usable",
    ref: "third",
    description: "Strong preference for easy to use, intuitive UX/UI.",
    icon: "ri-fingerprint-line",
  },
  {
    id: 4,
    title: "Dynamic",
    ref: "fourth",
    description:
      "Websites don't have to be static, I love making pages come to life.",
    icon: "ri-lightbulb-flash-line",
  },
]

const Habilities = () => {
  useEffect(() => {
    const sr = ScrollReveal()

    sr.reveal(".first", {
      duration: 1000,
      origin: "top",
      distance: "100px",
      delay: 400,
    })

    sr.reveal(".second", {
      duration: 1000,
      origin: "top",
      distance: "100px",
      delay: 500,
    })

    sr.reveal(".third", {
      duration: 1000,
      origin: "top",
      distance: "100px",
      delay: 600,
    })

    sr.reveal(".fourth", {
      duration: 1000,
      origin: "top",
      distance: "100px",
      delay: 700,
    })
  }, [])
  return (
    <div className="container-habilities">
      {data.map((item) => {
        return (
          <div className={["hability", item.ref].join(" ")} key={item.id}>
            <svg
              width="86"
              height="85"
              viewBox="0 0 86 85"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.283 5.6927C18.943 2.21463 22.4539 0 26.3078 0H60.5609C64.4823 0 68.0418 2.29203 69.6645 5.86197L85.0507 39.7115C86.2852 42.4274 86.2426 45.5526 84.9347 48.2338L69.7394 79.3842C68.0633 82.8203 64.5748 85 60.7517 85H26.1135C22.3607 85 18.9238 82.8989 17.213 79.5588L1.25482 48.4023C-0.166231 45.6278 -0.212222 42.3494 1.13044 39.5362L17.283 5.6927Z"
                fill="#E31B6D"
              />
            </svg>

            <i className={item.icon}></i>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Habilities
