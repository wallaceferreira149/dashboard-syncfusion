'use client';
import Image from 'next/image';
import { AiOutlineMenu } from 'react-icons/ai';
import { BsChatLeft } from 'react-icons/bs';
import { FiShoppingCart } from 'react-icons/fi';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { RiNotification3Line } from 'react-icons/ri';
import { useStateContext } from '../../../context/GlobalContext';
import { ToolTip } from '../../common/ToolTip/ToolTip';

import { useEffect } from 'react';
import avatar from '../../../data/avatar.jpg';
import { Cart } from '../../Cart/Cart';
import { Chat } from '../../Chat/Chat';
import { Notification } from '../Notification/Notification';
import { UserProfile } from '../UserProfile/UserProfile';

export interface INavbar {}

type NavButtonProps = {
  title: string;
  customFunc: () => void;
  icon: React.ReactNode;
  color: string;
  dotColor?: string;
};

const NavButton: React.FC<NavButtonProps> = ({
  title,
  customFunc,
  icon,
  color,
  dotColor,
}) => {
  return (
    <ToolTip content={title} side="bottom">
      <button
        type="button"
        onClick={customFunc}
        className={` text-${color}-500 relative text-xl rounded-full p-3 hover:bg-light-gray`}
      >
        <span
          style={{ background: dotColor }}
          className={`absolute inline-flex rounded-full h-2 w-2 right-2 top-2`}
        >
          {icon}
        </span>
      </button>
    </ToolTip>
  );
};

export const Navbar: React.FC<INavbar> = ({}) => {
  const {
    setActiveMenu,
    isClicked,
    setIsClicked,
    handleClick,
    screenSize,
    setScreenSize,
  } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener('resize', handleResize);
    handleResize();
    console.log(screenSize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <nav className="flex justify-between p-2 md:mx-6 relative">
      <NavButton
        title="Menu"
        customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
        color="blue"
        icon={<AiOutlineMenu />}
      />
      <div className="flex">
        <NavButton
          title="Cart"
          customFunc={() => handleClick('cart')}
          color="blue"
          icon={<FiShoppingCart />}
        />
        <NavButton
          title="Chat"
          customFunc={() => handleClick('chat')}
          color="blue"
          icon={<BsChatLeft />}
          dotColor="#03C9D7"
        />
        <NavButton
          title="Notifications"
          customFunc={() => handleClick('notification')}
          color="blue"
          icon={<RiNotification3Line />}
          dotColor="#03C9D7"
        />
        <ToolTip content="profile" side="bottom">
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            onClick={() => handleClick('userProfile')}
          >
            <Image
              src={avatar}
              alt="user avatar"
              className="rounded-full w-8 h-8"
            />
            <p className="text-gray-400 text-14">
              <span className="">{`Hi, `}</span>
              <span className="font-bold ml-1">{`Wallace`}</span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
        </ToolTip>

        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.userProfile && <UserProfile />}
        {isClicked.notification && <Notification />}
      </div>
    </nav>
  );
};
