import React from 'react';
import {Popup, PopUpInner } from './style';

interface PopUpProps {
  title: string;
  text: string;
  icon: string;

}

const PopUpContext = React.createContext(false);


const PopUp: React.FC<PopUpProps> = ({title, text, icon}) => {


return(
  <>
  <PopUpContext.Provider value={false}>
<Popup>
<PopUpInner>
<h1>{text}</h1>
<button >close me</button>
</PopUpInner>
</Popup>
</PopUpContext.Provider>
</>
)
}
export default PopUp;
