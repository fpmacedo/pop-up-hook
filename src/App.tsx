import React, { Component, useState } from 'react';
import Popup from './components/PopUp';
import {PopUpProvider, usePopUp } from './hooks/PopUpContext';



function App()  {
  const [showPopUp, setShowPopUp] = useState(false);
  const { addPopUp } = usePopUp();

  function handlePopUp(){
    addPopUp('messa');


  }

  return(
    <div>
    <h1> Simple Popup Example In React Application </h1>
    <button onClick={()=>{handlePopUp()}}> Click To Launch Popup</button>
    <PopUpProvider>
      {/* <Popup text='Meu PopUp'
          title="close"
          icon="icon"/> */}
    </PopUpProvider>


      </div>
  )

}

export default App;
