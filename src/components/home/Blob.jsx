import React, { useEffect } from "react"
import "./home.css"
import { motion } from "framer-motion"

const Blob = () => {
  // aplicar movimiento randon al blob

  useEffect(() => {
    const blob = document.querySelector(".bubble")
    const blob2 = document.querySelector(".bubble2")
    const blob3 = document.querySelector(".bubble3")

    // client width y height
    const width = window.innerWidth / 3
    const height = window.innerHeight / 3

    const random = (min, max) => Math.random() * (max - min) + min

    const blobAnimation = () => {
      blob.animate(
        [
          {
            transform: `translate(${random(width / 2, height)}px, ${random(
              width,
              height
            )}px)`,
          },
        ],
        {
          duration: random(10000, 15000),
          iterations: Infinity,
          direction: "alternate",
        }
      )
    }

    const blobAnimation2 = () => {
      blob2.animate(
        [
          {
            transform: `translate(${random(width, -height / 2)}px, ${random(
              width,
              -height
            )}px)`,
          },
        ],
        {
          duration: random(10000, 15000),
          iterations: Infinity,
          direction: "alternate",
        }
      )
    }

    const blobAnimation3 = () => {
      blob3.animate(
        [
          {
            transform: `translate(${random(-width, height)}px, ${random(
              width,
              height
            )}px)`,
          },
        ],
        {
          duration: random(10000, 15000),
          iterations: Infinity,
          direction: "alternate",
        }
      )
    }

    blobAnimation()
    blobAnimation2()
    blobAnimation3()
  }, [])

  return (
    <div className="container-svg">
      <motion.svg
        viewBox="0 0 800 500"
        className="bubble two"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        id="blobSvg"
      >
        <g transform="translate(146.2516860961914, -18.293701171875)">
          <path class="blob" fill="#B535C0">
            <animate
              repeatCount="indefinite"
              attributeName="d"
              dur="10000ms"
              values="M444.5,324Q398,398,324,422.5Q250,447,177.5,421Q105,395,60.5,322.5Q16,250,65,182Q114,114,182,103Q250,92,316.5,104.5Q383,117,437,183.5Q491,250,444.5,324Z;
              
              M431.5,334Q418,418,334,413Q250,408,162.5,416.5Q75,425,61,337.5Q47,250,74.5,176Q102,102,176,87Q250,72,327.5,83.5Q405,95,425,172.5Q445,250,431.5,334Z;
              
              M392,316.5Q383,383,316.5,414.5Q250,446,170,428Q90,410,78,330Q66,250,73.5,165.5Q81,81,165.5,84.5Q250,88,308,111Q366,134,383.5,192Q401,250,392,316.5Z;
              
              M424.5,334.5Q419,419,334.5,429.5Q250,440,163.5,431.5Q77,423,63,336.5Q49,250,96,196.5Q143,143,196.5,121Q250,99,327.5,97Q405,95,417.5,172.5Q430,250,424.5,334.5Z;
              
              M444.5,324Q398,398,324,422.5Q250,447,177.5,421Q105,395,60.5,322.5Q16,250,65,182Q114,114,182,103Q250,92,316.5,104.5Q383,117,437,183.5Q491,250,444.5,324Z;"
            ></animate>
          </path>
        </g>
      </motion.svg>

      <motion.svg
        className="bubble2 three"
        viewBox="0 0 800 500"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        id="blobSvg"
      >
        <g transform="translate(146.2516860961914, -18.293701171875)">
          <path class="blob" fill="#B535C0">
            <animate
              repeatCount="indefinite"
              attributeName="d"
              dur="10000ms"
              values="M412.5,314Q402,378,345.5,425Q289,472,218.5,449Q148,426,88.5,378Q29,330,48.5,257Q68,184,101.5,117.5Q135,51,213.5,30Q292,9,334,76.5Q376,144,399.5,197Q423,250,412.5,314Z;
              
              M417.5,331.5Q413,413,331.5,433.5Q250,454,187.5,414.5Q125,375,111.5,312.5Q98,250,105,181Q112,112,181,67.5Q250,23,315,71.5Q380,120,401,185Q422,250,417.5,331.5Z;
              
              M401.01497,313.14167Q376.28334,376.28334,313.14167,395.65937Q250,415.03539,177.38419,405.13351Q104.76837,395.23163,97.63759,322.61581Q90.50681,250,105.37466,185.12126Q120.24251,120.24251,185.12126,65.6267Q250,11.01089,330.73571,49.76973Q411.47142,88.52858,418.60901,169.26429Q425.7466,250,401.01497,313.14167Z;
              
              M401.75376,305.43656Q360.87312,360.87312,305.43656,411.66307Q250,462.45303,185.98638,420.24014Q121.97275,378.02725,89.87312,314.01362Q57.77349,250,92.99248,189.10573Q128.21147,128.21147,189.10573,79.07096Q250,29.93046,337.56344,52.40179Q425.12688,74.87312,433.88064,162.43656Q442.6344,250,401.75376,305.43656Z;
              
              M412.5,314Q402,378,345.5,425Q289,472,218.5,449Q148,426,88.5,378Q29,330,48.5,257Q68,184,101.5,117.5Q135,51,213.5,30Q292,9,334,76.5Q376,144,399.5,197Q423,250,412.5,314Z;"
            ></animate>
          </path>
        </g>
      </motion.svg>

      <motion.svg
        className="bubble3 four"
        viewBox="0 0 800 500"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        id="blobSvg"
      >
        <g transform="translate(146.2516860961914, -18.293701171875)">
          <path class="blob" fill="#B535C0">
            <animate
              repeatCount="indefinite"
              attributeName="d"
              dur="10000ms"
              values="M445.5,299Q420,348,391,396.5Q362,445,306,469.5Q250,494,188,479.5Q126,465,95.5,411Q65,357,49,303.5Q33,250,68.5,208Q104,166,117.5,104.5Q131,43,190.5,47Q250,51,312,43.5Q374,36,387,100Q400,164,435.5,207Q471,250,445.5,299Z;
              
              M423.5,288.5Q384,327,379.5,396.5Q375,466,312.5,461Q250,456,200.5,438.5Q151,421,119,382.5Q87,344,66.5,297Q46,250,46.5,191.5Q47,133,100,107.5Q153,82,201.5,78Q250,74,303.5,69Q357,64,374,116.5Q391,169,427,209.5Q463,250,423.5,288.5Z;
              
              M427.5,306.5Q445,363,398,394Q351,425,300.5,451Q250,477,207,438Q164,399,127,371Q90,343,70,296.5Q50,250,85,212.5Q120,175,138.5,132Q157,89,203.5,68Q250,47,298.5,64Q347,81,395,110Q443,139,426.5,194.5Q410,250,427.5,306.5Z;
              
              M434.5,292Q396,334,375,382.5Q354,431,302,444.5Q250,458,188.5,460.5Q127,463,117,397.5Q107,332,83,291Q59,250,88.5,212Q118,174,144.5,144Q171,114,210.5,101.5Q250,89,309,67.5Q368,46,413.5,87.5Q459,129,466,189.5Q473,250,434.5,292Z;
              
              M445.5,299Q420,348,391,396.5Q362,445,306,469.5Q250,494,188,479.5Q126,465,95.5,411Q65,357,49,303.5Q33,250,68.5,208Q104,166,117.5,104.5Q131,43,190.5,47Q250,51,312,43.5Q374,36,387,100Q400,164,435.5,207Q471,250,445.5,299Z;"
            ></animate>
          </path>
        </g>
      </motion.svg>
    </div>
  )
}

export default Blob
