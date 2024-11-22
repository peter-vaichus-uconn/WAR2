import './App.css'
import background1 from "./Screenshot 2024-11-21 at 1.21.42 PM.png";
import background2 from "./Screenshot 2024-11-21 at 1.29.16 PM.png"


// function handleClick(){ //method to flip card

// }


const App = () =>{

  return (
    <>
      <div style={{ display: "flex", justifyContent: 'center', flexWrap: "wrap" }}>
        <div style={{ backgroundImage: `url(${background1})`,backgroundSize: "cover"}} className = "card" onClick={handleClick()}>
        </div>
        <div id = "face_down" className = "card">
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: 'center', flexWrap: "wrap" }}>
        <div style={{ backgroundImage: `url(${background2})`,backgroundSize: "cover"}} className = "card">
        </div>
        <div  id = "face_down" className = "card">
        </div>
      </div>
    </>
  )
}

export default App
