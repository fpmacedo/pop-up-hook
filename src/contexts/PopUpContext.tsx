import { createContext } from 'react';

interface PopUpContextData {
  close(): void;
}

const PopUpContext = createContext<PopUpContextData>({} as PopUpContextData);

export default PopUpContext;
