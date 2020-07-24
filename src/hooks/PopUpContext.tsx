import React, { createContext, useContext, useCallback, } from 'react';

interface PopUpContextData {
  addPopUp(message: string): void;
  removePopUp(): void;
}



const PopUpContext = createContext<PopUpContextData>({} as PopUpContextData);


const PopUpProvider: React.FC = ({children}) =>{

  const addPopUp = useCallback((message)=>{
    console.log('addPopUp')

    const toast = message;
  },[]);

  const removePopUp = useCallback(()=>{},[])

  return(
    <PopUpContext.Provider value={{addPopUp, removePopUp}}>
      {children}
    </PopUpContext.Provider>
  )
}

function usePopUp(): PopUpContextData{
  const context = useContext(PopUpContext);

  if(!context){
    throw new Error('usePopUp must be used whitin a PopUpProvider')
  }

  return context;
}

export {PopUpProvider, usePopUp}
