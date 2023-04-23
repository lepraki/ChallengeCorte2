import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "./store/counterSlice";

export const App = () =>{
  const {counter} =useSelector(state=> state.counter);
  const dispatch= useDispatch();

  return (
    <>
    <h1>Parcial2</h1>
    <hr/>
    <span> COUNTER {counter} </span>
    <button 
    className="btn btn-primary"
    onClick={()=> dispatch(increment())}>+1</button>
    </>
  );
}
export default App;