import React, { useState, useEffect } from "react"
import "./nav.css"
import ScrollReveal from "scrollreveal"
import Logo from "../../assets/logo.png"

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
  const [open, setOpen] = useState("")

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

  const handleOpen = () => {
    setOpen("open")
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
          <a href="#Home">
            <svg xmlns="http://www.w3.org/2000/svg" width="399" height="363">
              <image xlinkHref="data:img/png;base64,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" />
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
                  key={index}
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
      <div className="container-open-tag-idiom">
        <i
          onClick={handleOpen}
          className={["ri-arrow-down-s-line", open].join(" ")}
        ></i>
      </div>
    </header>
  )
}

export default Nav
