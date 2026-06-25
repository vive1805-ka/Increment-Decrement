import HandleIncrement from "./HandleIncrement";
import HandleDecrement from "./HandleDecrement";
const ButtonCont=({handleIncrement,handleDecrement})=>{
    return(
        <div className="btnContainer">
        <HandleIncrement handleIncrement={handleIncrement}></HandleIncrement>
        <HandleDecrement handleDecrement={handleDecrement}></HandleDecrement>
        </div>
    );

}
export default ButtonCont;

//app.js+Counter.js+ButtonCont.js
// const ButtonCont=({handleIncrement,handleDecrement})=>{
//     return(
//         <div className="btnContainer">
//          <button onClick={handleIncrement} id="inc">Inc</button>
//         <button onClick={handleDecrement} id="dec">Dec</button>
//         </div>
//     );

// }
// export default ButtonCont;