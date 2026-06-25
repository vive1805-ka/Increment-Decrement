import ButtonCont from './ButtonCont';
const Counter=({val,handleIncrement,handleDecrement})=>{
    return(
        <div className="counter">
        <h1>{val}</h1>
        {val>=0 ? (<p className="pos">Value is positive</p>) : (<p className="neg">Value is Negative</p>)}
          {/* <h2>
        {val>0 ? "Positive Number" : val<0 ? "Negative Number" : "Zero"}
      </h2>  */}
        <ButtonCont handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}></ButtonCont>
        
      </div>
    );

}
export default Counter;

//1.app.js
//2.app.js+Counter.js
/* <div className="btnContainer">
        <button onClick={handleIncrement} id="inc">Inc</button>
        <button onClick={handleDecrement} id="dec">Dec</button>
        </div> */
//3.app.js+Counter.js+ButtonCont.js
// import ButtonCont from './ButtonCont';
// const Counter=({val,handleIncrement,handleDecrement})=>{
//     return(
//         <div className="counter">
//         <h1>{val}</h1>
//         <ButtonCont handleIncrement={handleIncrement}
//         handleDecrement={handleDecrement}></ButtonCont>
        
//       </div>
//     );

// }
// export default Counter;

