import { createRoot } from "react-dom/client"
import "materialize-css/dist/css/materialize.min.css"

const App = () => {
  const bodyStyle = {
    height: "350vh",
    backgroundColor: "black",
    margin: 0,
    padding: 0,
    fontFamily:
      "sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue'"
  }

  const style = `
    ::-webkit-scrollbar {
      width: 17px;
    }
    ::-webkit-scrollbar-thumb {
      background-image: linear-gradient(#000, #0f0);
      border-radius: 20px;
      transition: 2s;
    }
    ::-webkit-scrollbar-thumb:hover {
      background-image: linear-gradient(#000, #f00);
    }
    ::-webkit-scrollbar-thumb:active {
      background-image: linear-gradient(#000, #00f);
    }
    img {
      position: fixed;
      width: 200px;
      height: 200px;
      top: 50%;
      left: 50%;
      animation: torser linear both;
      animation-timeline: scroll();
    }
    @keyframes torser {
      0% {
        transform: translate(-50%, -50%) skewX(0deg) skewY(180deg);
        filter: hue-rotate(0deg);
      }
      100% {
        transform: translate(-50%, -50%) skewX(180deg) skewY(0deg);
        filter: hue-rotate(180deg);
      }
    }
  `

  return (
    <div style={bodyStyle}>
      <style>{style}</style>
      <img src="assets/icon.svg" alt="image" className="responsive-img" />
    </div>
  )
}

const root = document.createElement("div")
document.body.appendChild(root)
createRoot(root).render(<App />)
