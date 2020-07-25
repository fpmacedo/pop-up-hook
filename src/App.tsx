import React from 'react';
import Popup from './components/PopUp';
import { PropUpProvider, usePopUp } from './contexts/PopUpContext';

const App: React.FC = () => {
  const { open, estado } = usePopUp();

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
      <PropUpProvider>
        {estado ? <Popup text="Meu PopUp" title="close" icon="icon" /> : null}
      </PropUpProvider>
    </div>
  );
};

export default App;
