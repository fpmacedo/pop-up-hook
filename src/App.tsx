import React from 'react';
import Popup from './components/PopUp';
import { usePopUp } from './contexts/PopUpContext';

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

      {estado ? (
        <Popup text="PopUp component" title="My new PopUp" icon="success" />
      ) : null}
    </div>
  );
};

export default App;
