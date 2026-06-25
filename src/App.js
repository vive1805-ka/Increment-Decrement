import './App.css';
import {useEffect, useState} from 'react';
import Counter from './Counter';

function App() {
  let [val,setVal]=useState(0);
  //Val is a variable
  //setVal is a function using to update first parameter ex val
  // let val=10;
  const handleIncrement=()=>{
    // val=val+1;
    setVal(val+1);
    console.log("inc button clicked");
  };
  const handleDecrement=()=>{
    setVal(val-1);
    // val=val-1;
    console.log("dec button clicked")
  };
//   let [a,seta]=useState(0);
//   const handleIncrementa=()=>{
//     seta(a+1);
//   };
//   const handleDecrementa=()=>{
//     seta(a-1);
//   };
// useEffect(()=>{
//   console.log("Calling Useeffect",a);
// },[a]);
//callback function
//Array of dependencies
//1.Empty Array of dependencies
//2.Dependencies
//3.Without Array of dependencies
useEffect(()=>{
  if(val<0){
    let timer=setTimeout(()=>{
      setVal(0)
    },2000);
   // Cleanup
    return()=>{
      clearTimeout(timer);
    };
  }
});//if we enter negative number it will change to 0

  return (
    <div className="App">

      <Counter val={val}
      handleIncrement={handleIncrement}
      handleDecrement={handleDecrement}></Counter>
      </div>
      
      /* <Counter val={a}
      handleIncrement={handleIncrementa}
      handleDecrement={handleDecrementa}></Counter>
    </div> */
  );
}

export default App;





// function App() {
//   let [val,setVal]=useState(30);
//   //Val is a variable
//   //setVal is a function using to update first parameter ex val
//   // let val=10;
//   const handleIncrement=()=>{
//     // val=val+1;
//     setVal(val+1);
//     console.log("inc button clicked");
//   }
//   const handleDecrement=()=>{
//     setVal(val-1);
//     // val=val-1;
//     console.log("dec button clicked")
//   }
//   return (
//     <div className="App">
//       <div className="counter">
//         <h1>{val}</h1>
//         <div className="btnContainer">
//         <button onClick={handleIncrement} id="inc">Inc</button>
//         <button onClick={handleDecrement} id="dec">Dec</button>
//         </div>
//       </div>
//     </div>
//   );
// }
