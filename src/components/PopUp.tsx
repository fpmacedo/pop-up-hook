import React from 'react';
import { Popup, PopUpInner, FiAlertCircleIcon } from './style';
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
          <h1>{title}</h1>

          <FiAlertCircleIcon />

          <p>{text}</p>
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
