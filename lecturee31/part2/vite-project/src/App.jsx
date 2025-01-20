import { useState } from 'react';
import './App.css'

function App() {
  // let count=0; --> its wrong because react do not keep track of simple variable(means it does not render the component again even if value changed), it only keep track of state variable.

  // so we will use "useState()" to declare the state variable
  // useState return the array --> [stateVariableName, stateFunction] ; eg: [count,setContext()]
  let [count,setCount] = useState(0);//here 0 is count ki inital value
  function changeCount(){
    let newCount=count+1;
    setCount(newCount);//to update the change 
  }
  return (
    <>
      <h1>Counter App</h1>
      <h2>{count}</h2>
      {/* function ka naam pass krna h sirf na ki usko call ni krna h */}
      <button onClick={changeCount}>Increase</button>
    </>
  )
}

export default App
