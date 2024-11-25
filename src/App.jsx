import { useState } from 'react';
import './App.css'
import background1 from "./Screenshot 2024-11-21 at 1.21.42 PM.png";
import ReactCardFlip from 'react-card-flip';
import hatsArr from './faces';


//testing
function rand_card(){
  const face1 = hatsArr[Math.floor(Math.random() * Object.keys(hatsArr).length)];
  const face2 = hatsArr[Math.floor(Math.random() * Object.keys(hatsArr).length)];
  return [face1,face2] //returns two lists, each containing a card value and the card image 
}


function App(){
  const [isFlipped, SetIsFlipped] = useState(false) //set is flipped to false
  const [face, SetFace] = useState(null)
  const [isShown, SetIsShown] = useState(false)

  function flipcard(){
    SetIsFlipped(!isFlipped)
    if (!face) { // Assign values only on the first flip
      SetFace(rand_card());
    }
  }

  function change(){
    SetFace(rand_card())
  }

  function show_result(){
    SetIsShown(!isShown)
  }

  function max_card(face) {
    return  face[0][0]==face[1][0]? 'War!' : (face[0][0]>face[1][0]? 'Card 1 Wins!' : 'Card 2 Wins!');
  }

  return (
    <>
      <div style={{ display: "flex", justifyContent: 'center', flexWrap: "wrap" }}>
        <ReactCardFlip flipDirection='horizontal' isFlipped={isFlipped}>
          <div style={{ backgroundImage: `url(${background1})`,backgroundSize: "cover"}} className = "card card_back" onClick={()=> {flipcard(); change(); show_result()}}>
          
          </div>

          <div style={{ backgroundImage: face ? `url(${face[0][1]})` : '',backgroundSize: "cover"}} className = "card card_face" onClick={()=> {flipcard(); show_result()}}>
          
          </div >
        </ReactCardFlip>
      </div>
      <div style={{ display: "flex", justifyContent: 'center', flexWrap: "wrap" }}>
        <ReactCardFlip flipDirection='horizontal' isFlipped={isFlipped}>
          <div style={{ backgroundImage: `url(${background1})`,backgroundSize: "cover"}} className = "card card_back" onClick={()=> {flipcard(); change(); show_result()}}>
            
          </div>
          <div style={{ backgroundImage: face ? `url(${face[1][1]})` : '',backgroundSize: "cover"}} className = "card card_face" onClick={()=> {flipcard(); show_result()}}>
          
          </div >
        </ReactCardFlip>
      </div>
      <div className='card result' show_result>
        {isShown ? (face ? max_card(face) : '') : "" }
      </div>

    </>
  )
}

export default App
