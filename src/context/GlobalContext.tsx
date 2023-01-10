import { createContext, PropsWithChildren, useContext, useState } from 'react';
import { GlobalContextType } from '../@types/context';

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
  activeMenu: true,
};

const StateContext = createContext<GlobalContextType | null>(initialState);

export const GlobalContextProvider = ({ children }: PropsWithChildren) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [chat, setChat] = useState(true);
  const [cart, setCart] = useState(true);
  const [userProfile, setUserProfile] = useState(true);
  const [notification, setNotification] = useState(true);
  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        chat,
        cart,
        notification,
        userProfile,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () =>
  useContext(StateContext) as GlobalContextType;
