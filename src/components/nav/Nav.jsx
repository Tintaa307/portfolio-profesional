import React, { useState, useEffect } from "react"
import "./nav.css"
import ScrollReveal from "scrollreveal"

const navItems = [
  {
    id: "one",
    name: "About",
    link: "#About",
  },
  {
    id: "two",
    name: "Skills",
    link: "#Skills",
  },
  {
    id: "three",
    name: "Projects",
    link: "#Projects",
  },
  {
    id: "four",
    name: "Contact",
    link: "#Contact",
  },
]

const Nav = () => {
  const [selected, setSelected] = useState("")
  const [navOpen, setNavOpen] = useState("")

  const handleClick = (e) => {
    setSelected(e.target.id)
  }

  const OnScroll = () => {
    if (window.scrollY > 0) {
      setNavOpen("nav-open")
    } else {
      setNavOpen("")
    }
    if (window.scrollY > 460) {
      setSelected("one")
    } else {
      setSelected("")
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", OnScroll)
    return () => {
      window.removeEventListener("scroll", OnScroll)
    }
  }, [])

  return (
    <header className={["container-header", navOpen].join(" ")}>
      <nav className="container-nav">
        <div className="container-logo">
          <a href="#">
            <svg
              width="62"
              height="60"
              viewBox="0 0 62 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.8232 16.9091L30.8544 39.0114H31.1243L38.1697 16.9091H44.9879L34.9595 46H27.0334L16.9908 16.9091H23.8232Z"
                fill="#e31b6d"
                className="letra"
              />
              <path
                d="M1 40.7623V20.3223C1 18.8646 1.79301 17.5223 3.06978 16.8189L29.5532 2.22797C30.7728 1.55601 32.2542 1.5667 33.464 2.2562L58.9806 16.7986C60.2291 17.5102 61 18.8368 61 20.2738V40.8098C61 42.2896 60.183 43.6484 58.8761 44.3425L33.3617 57.8922C32.2059 58.506 30.823 58.5156 29.6588 57.9179L3.17316 44.3207C1.83895 43.6358 1 42.262 1 40.7623Z"
                stroke="#e31b6d"
                strokeWidth="2"
                className="circulo"
              />
            </svg>
          </a>
        </div>
        <div className="container-list">
          <ul className="list">
            {navItems.map(({ id, name, link }, index) => {
              return (
                <div
                  onClick={handleClick}
                  id={id}
                  className={["container-li", selected].join(" ")}
                >
                  <li key={index} className="list-item">
                    <a id={id} href={link} className="list-item-link">
                      {name}
                    </a>
                  </li>
                  <div className="selected"></div>
                </div>
              )
            })}
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Nav
