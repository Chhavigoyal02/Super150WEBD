import { useState } from 'react'
import './App.css'

function App() {
  let [color, setColor] = useState("black");
  function changeColor(){
      let arr = ["red","blue","pink","orange","white","black","purple","green","plum","indigo"];
      setColor(arr[Math.floor(Math.random()*10)]);
  }

  return (
    <>
      <h1>Random color generator</h1>
      <div style={{height:"100px",width:"100px", border:"2px solid white", background:color, margin:"10px auto  " }}></div>
      <button style={{border:"2px solid white"}} onClick={changeColor}>Click</button>
    </>
  )
}

export default App
