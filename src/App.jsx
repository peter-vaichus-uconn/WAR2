import { useState } from 'react';
import './App.css'
import background1 from "./Screenshot 2024-11-21 at 1.21.42 PM.png";
import ReactCardFlip from 'react-card-flip';
import hatsArr from './faces';

const face1 = hatsArr[Math.floor(Math.random() * Object.keys(hatsArr).length)][1];
const face2 = hatsArr[Math.floor(Math.random() * Object.keys(hatsArr).length)][1];


//testing

function App(){
  const [isFlipped, SetIsFlipped] = useState(false);

  function flipcard(){
    SetIsFlipped(!isFlipped)
  }

  return (
    <>

      <button onClick={flipcard}>

      </button>
      <div style={{ display: "flex", justifyContent: 'center', flexWrap: "wrap" }}>
        <ReactCardFlip flipDirection='horizontal' isFlipped={isFlipped}>
          <div style={{ backgroundImage: `url(${background1})`,backgroundSize: "cover"}} className = "card card_back" onClick={flipcard}>

          </div>

          <div style={{ backgroundImage: `url(${face1})`,backgroundSize: "cover"}} className = "card card_face" onClick={flipcard}>

          </div >
        </ReactCardFlip>
      </div>
      <div style={{ display: "flex", justifyContent: 'center', flexWrap: "wrap" }}>
        <ReactCardFlip flipDirection='horizontal' isFlipped={isFlipped}>
          <div style={{ backgroundImage: `url(${background1})`,backgroundSize: "cover"}} className = "card card_back" onClick={flipcard}>

          </div>

          <div style={{ backgroundImage: `url(${face2})`,backgroundSize: "cover"}} className = "card card_face" onClick={flipcard}>

          </div >
        </ReactCardFlip>
      </div>
    </>
  )
}

export default App
