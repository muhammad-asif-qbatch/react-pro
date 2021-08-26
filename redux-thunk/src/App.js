
import React, { useEffect, useState } from 'react'
import "./App.css"
import {useSelector , useDispatch} from 'react-redux'
import {incNumber,decNumber, incNumberAction} from './actions/index'



const App = () => {
  const currentState = useSelector((state) => state.changeNumber);
  console.log("currentState", currentState);
  const dispatch= useDispatch();
  return (
    <div className="container">
      <h1>Increment/Decrement Counter</h1>
      <h4>Using React and Redux</h4>

      <div className="quantity">
      
        <a className="quantity__minus" title="Decrement" onClick={() => dispatch(decNumber(5))}><spna>-</spna></a>
        <input name="quantity" type='text' className="quantity__input" value={currentState.title}/>
        <a className="quantity__plus" title="Increment" onClick={() => dispatch(incNumberAction()) }><spna>+</spna></a>

      </div>
      
    </div>
  )
}

export default App

