type ClickedEvents = {
  chat: boolean;
  cart: boolean;
  userProfile: boolean;
  notification: boolean;
};

export type GlobalContextType = {
  // chat: boolean;
  // cart: boolean;
  // userProfile: boolean;
  // notification: boolean;
  isClicked: ClickedEvents;
  setIsClicked: Dispatch<SetStateAction<ClickedEvents>>;
  activeMenu: boolean;
  setActiveMenu: Dispatch<SetStateAction<boolean>>;
  handleClick: (clicked: string) => void;
  screenSize: number | undefined;
  setScreenSize: Dispatch<SetStateAction<number | undefined>>;
};
