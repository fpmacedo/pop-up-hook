import React, { useState } from 'react';
import Popup from './components/PopUp';
import PopUpContext from './contexts/PopUpContext';

const App: React.FC = () => {
  const [estado, setEstado] = useState(false);

  function open() {
    setEstado(true);
    console.log(estado);
  }

  function close() {
    setEstado(false);
    console.log(estado);
  }

  return (
    <div>
      <h1> Simple Popup Example In React Application </h1>
      <button
        type="submit"
        onClick={() => {
          open();
        }}
      >
        Click To Launch Popup
      </button>
      <PopUpContext.Provider value={{ close }}>
        {estado ? <Popup text="Meu PopUp" title="close" icon="icon" /> : null}
      </PopUpContext.Provider>
    </div>
  );
};

export default App;
