import React, { useState } from 'react';
import "../css/formStages.css"

const FormStages = () => {

  const [prevS, setPS] = useState("1S");

  function selStage(eT){
    if(eT.id==prevS){
      return false;
    }
    document.getElementById(eT.id).classList.add("selected");
    document.getElementById(prevS).classList.remove("selected");
    setPS(eT.id);
  }

  return (
    <div className='stages'>
      <button id='1S' onClick={(e)=>{selStage(e.target)}} className='selected'>1</button>
      <span></span>
      <button id='2S' onClick={(e)=>{selStage(e.target)}}>2</button>
      <span></span>
      <button id='3S' onClick={(e)=>{selStage(e.target)}}>3</button>
      <span></span>
      <button id='4S' onClick={(e)=>{selStage(e.target)}}>4</button>
      <span></span>
      <button id='5S' onClick={(e)=>{selStage(e.target)}}>5</button>
      <span></span>
      <button id='6S' onClick={(e)=>{selStage(e.target)}}>6</button>
    </div>
  )
}

export default FormStages
