export type GlobalContextType = {
  chat: boolean;
  cart: boolean;
  userProfile: boolean;
  notification: boolean;
  activeMenu: boolean;
  setActiveMenu?: Dispatch<SetStateAction<boolean>>;
};
