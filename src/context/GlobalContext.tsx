import { createContext, PropsWithChildren, useContext, useState } from 'react';
import { GlobalContextType } from '../@types/context';

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
  activeMenu: true,
};

const StateContext = createContext<GlobalContextType | null>(null);

export const GlobalContextProvider = ({ children }: PropsWithChildren) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState<number | undefined>(undefined);

  const handleClick = (clicked: string) => {
    setIsClicked({ ...initialState, [clicked]: true });
  };

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () =>
  useContext(StateContext) as GlobalContextType;
