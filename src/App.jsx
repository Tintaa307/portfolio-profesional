import { useState, useEffect } from "react"
import reactLogo from "./assets/react.svg"
import "./App.css"
import Nav from "./components/nav/Nav"
import Home from "./components/home/Home"
import Preload from "./components/preload/Preload"
import { motion } from "framer-motion"
import About from "./components/about/About"

function App() {
  const [loading, setLoading] = useState(true)

  return (
    <>
      {loading ? (
        <Preload setLoading={setLoading} />
      ) : (
        <>
          <motion.div
            initial={{ x: -1200 }}
            animate={{ x: 0 }}
            transition={{
              duration: 1.5,
              bounce: 0.4,
              type: "spring",
            }}
            className="container-all"
          >
            <Nav />
            <Home />
            <About />
          </motion.div>
        </>
      )}
    </>
  )
}

export default App
