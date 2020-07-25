import React, { createContext, useState, useContext, useCallback } from 'react';

interface PopUpContextData {
  close(): void;
  open(): void;
  estado: boolean;
}

const PopUpContext = createContext<PopUpContextData>({} as PopUpContextData);

const PropUpProvider: React.FC = ({ children }) => {
  const [estado, setEstado] = useState(false);

  function open() {
    setEstado(true);
    console.log(estado);

    return estado;
  }

  function close() {
    setEstado(false);
    console.log(estado);
    return estado;
  }

  // const open = useCallback(() => {
  //   setEstado(true);
  //   console.log(estado);

  //   return estado;
  // }, [estado]);

  // const close = useCallback(() => {
  //   setEstado(false);
  //   console.log(estado);
  //   return estado;
  // }, [estado]);

  return (
    <PopUpContext.Provider value={{ close, open, estado }}>
      {children}
    </PopUpContext.Provider>
  );
};

function usePopUp(): PopUpContextData {
  const context = useContext(PopUpContext);

  if (!context) {
    throw new Error('usePopUp must be used whitin an PropUpProvider');
  }

  return context;
}

export { PropUpProvider, PopUpContext, usePopUp };
