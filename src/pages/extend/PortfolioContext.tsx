import { createContext } from 'preact';
import { useState, useContext } from 'preact/hooks';

const CardModalContext = createContext();
const CardToggleContext = createContext();

export function useModalContext() {
  return useContext(CardModalContext);
}

export function useToggleContext() {
  return useContext(CardToggleContext);
}

export function CardModalProvider({children}) {

  const [ modal, setModal ] = useState(false);
  const [ index, setIndex ] = useState(0);
  
  const toggleModal = () => setModal((prev) => !prev);

  // set state in context
  return <CardModalContext.Provider value={{modal, index}}>
          <CardToggleContext.Provider value={{toggleModal, setIndex}}>
            { children }            
          </CardToggleContext.Provider>   
         </CardModalContext.Provider>

}