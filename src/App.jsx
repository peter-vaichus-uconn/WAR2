import { useState } from 'react';
import './App.css'
import background1 from "./Screenshot 2024-11-21 at 1.21.42 PM.png";
import ReactCardFlip from 'react-card-flip';
import { deck1, deck2 } from './faces';
import { Queue } from './faces';

function App(){
  const [isFlipped, SetIsFlipped] = useState(false) //set is flipped to false
  const [face1, SetFace1] = useState(deck1.peek())
  const [face2, SetFace2] = useState(deck2.peek())
  // // const [isShown, SetIsShown] = useState(false)
  const [result, SetResult] = useState(null)
  const [count1, SetCount1] = useState(deck1.length())
  const [count2, SetCount2] = useState(deck2.length())

  const [isVisible, SetIsVisible] = useState(false)

  function flipcard(){
    SetIsFlipped(!isFlipped)
  }


  function remove_top(){
    deck1.dequeue()
    SetFace1(deck1.peek())
    deck2.dequeue()
    SetFace2(deck2.peek())

  }

  function compare(pair){
    if(pair[0][0] > pair[1][0]){
      deck1.enqueue(pair[0]) //add your winning card to the back of the queue
      deck1.enqueue(pair[1]) //add the captured card to the back of the queue
      SetCount1(count1+1)
      SetCount2(count2-1)
    }
    else if (pair[0][0] < pair[1][0]){
      deck2.enqueue(pair[0]) //add your winning card to the back of the queue
      deck2.enqueue(pair[1]) //add the captured card to the back of the queue
      SetCount2(count2+1)
      SetCount1(count1-1)
    } 
  }


  function max_card(face1,face2) {
    face1[0]==face2[0]? (SetResult('War!'), SetIsVisible(!isVisible)): (face1[0]>face2[0]? SetResult('Card 1 Wins') : SetResult('Card 2 Wins'));
  }


  return (
    <>
      <div style={{ display: "flex", justifyContent: 'center', flexWrap: "wrap" }}>
        <div className='card result'>
          {count1}
        </div>
        <ReactCardFlip flipDirection='horizontal' isFlipped={isFlipped}>
          <div style={{ backgroundImage: `url(${background1})`,backgroundSize: "cover"}} className = "card card_back" onClick={()=> {flipcard(); max_card(face1,face2); compare([face1,face2])}}>
        
          </div>

          <div style={{ backgroundImage: face1 ? `url(${face1[1]})` : '',backgroundSize: "cover"}} className = "card card_face" onClick={()=> {flipcard(); remove_top(); SetResult(null); SetIsVisible(false)}}>
            
          </div >
        </ReactCardFlip>
        {isVisible && (
          <>
            <div style={{ backgroundImage: `url(${background1})`,backgroundSize: "cover"}} className = "card card_back" onClick={()=> {flipcard(); max_card(face1,face2); compare([face1,face2])}}>
            
            </div>
            <div style={{ backgroundImage: `url(${background1})`,backgroundSize: "cover"}} className = "card card_back" onClick={()=> {flipcard(); max_card(face1,face2); compare([face1,face2])}}>
            
            </div>
            <div style={{ backgroundImage: `url(${background1})`,backgroundSize: "cover"}} className = "card card_back" onClick={()=> {flipcard(); max_card(face1,face2); compare([face1,face2])}}>
            
            </div>
            </>
          )
        }
      </div>
      <div style={{ display: "flex", justifyContent: 'center', flexWrap: "wrap" }}>
        <div className='card result'>
          {count2}
        </div>
        <ReactCardFlip flipDirection='horizontal' isFlipped={isFlipped}>
          <div style={{ backgroundImage: `url(${background1})`,backgroundSize: "cover"}} className = "card card_back" onClick={()=> {flipcard(); max_card(face1,face2)}}>
          </div>

          <div style={{ backgroundImage: face2 ? `url(${face2[1]})` : '',backgroundSize: "cover"}} className = "card card_face" onClick={()=> {flipcard(); remove_top()}}>
            
          </div >
        </ReactCardFlip>
        {isVisible && (
          <>
            <div style={{ backgroundImage: `url(${background1})`,backgroundSize: "cover"}} className = "card card_back" onClick={()=> {flipcard(); max_card(face1,face2); compare([face1,face2])}}>
            
            </div>
            <div style={{ backgroundImage: `url(${background1})`,backgroundSize: "cover"}} className = "card card_back" onClick={()=> {flipcard(); max_card(face1,face2); compare([face1,face2])}}>
            
            </div>
            <div style={{ backgroundImage: `url(${background1})`,backgroundSize: "cover"}} className = "card card_back" onClick={()=> {flipcard(); max_card(face1,face2); compare([face1,face2])}}>
            
            </div>
            </>
          )
        }
      </div>

      <div className='card result'>
        {result}
      </div>
    </>
  )
}

export default App


/*
Next step: group the cards in two groups. list one by one until they repear

function randomNoRepeats(array) {
  var copy = array.slice(0);
  return function() {
    if (copy.length < 1) { copy = array.slice(0); }
    var index = Math.floor(Math.random() * copy.length);
    var item = copy[index];
    copy.splice(index, 1);
    return item;
  };
}

var chooser = randomNoRepeats(['Foo', 'Bar', 'Gah']);
chooser(); // => "Bar"
chooser(); // => "Foo"
chooser(); // => "Gah"
chooser(); // => "Foo"
*/


/*
Option two

make two queues 
use random selection no repeat function to populate each queue one card at a time
insert a marker "x" to mark the end of the queue

deque cards from both queues
compare both cards
winning card, send both cards to the back of the queue 
when the marker "x" appears:
  deque the x
  reshuffle the queue
  enque the x



*/