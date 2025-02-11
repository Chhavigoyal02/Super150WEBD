import { useState } from 'react';
import './App.css'
function App() {
  // let count=0;
 let[count,setCount] =useState(0);
function changeNumber(){
  let newcount=Math.random();
  newcount=Math.floor(newcount*10);
setCount(newcount);
}

 return(
  <div>
    <h1>Let's Play A Silly Game...</h1>
    <h2>{count}</h2>
   {/* {count==7?<h3>YOU WIN</h3>:<h3>YOU LOSE</h3>} */}
   {count==7 && <div>
     <h1>You Win</h1>
     <img src="https://res.cloudinary.com/dzdgpwtox/image/upload/w_450,c_scale,f_auto/v1630928437/final_designs/seller_design_294646/f_20210906114036.png" alt="" />
    </div>}
    {count!=7 && <div>
    <h1>You loose</h1>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWkPO5t1ViQPz36J74pkSxlsgqM_B3raZFig&s" alt="" />
    </div>}
    <button onClick={changeNumber}>Click Me!!</button>
  </div>
 )
}

export default App