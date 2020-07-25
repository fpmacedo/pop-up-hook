import React from 'react';
import { Popup, PopUpInner } from './style';
import { usePopUp } from '../contexts/PopUpContext';

interface PopUpProps {
  title: string;
  text: string;
  icon: string;
}

const PopUp: React.FC<PopUpProps> = ({ title, text, icon }) => {
  const { close } = usePopUp();

  function change() {
    close();
  }

  return (
    <>
      <Popup>
        <PopUpInner>
          <h1>{text}</h1>
          <button
            type="submit"
            onClick={() => {
              change();
            }}
          >
            close me
          </button>
        </PopUpInner>
      </Popup>
    </>
  );
};
export default PopUp;
