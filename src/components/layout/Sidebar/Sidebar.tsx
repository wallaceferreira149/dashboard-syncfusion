import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import Link from 'next/link';
import { MdOutlineCancel } from 'react-icons/md';
import { SiShopware } from 'react-icons/si';

import { links } from '../../../data/dummy';

export interface ISidebar {}

export const Sidebar: React.FC<ISidebar> = ({}) => {
  const isMenuActive = true;
  const isLinkActive = true;
  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {isMenuActive && (
        <>
          <header className="flex justify-between items-center">
            <Link
              href="/"
              className="flex items-center gap-3 ml-3 mt-4 text-xl font-bold tracking-tight dark:text-white text-slate-900"
            >
              <SiShopware /> <span>Shoppy</span>
            </Link>
            <TooltipComponent content="close" position="BottomCenter">
              <button
                type="button"
                onClick={() => {}}
                className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden duration-300"
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </header>
          <menu className="mt-10">
            {links?.map((item) => (
              <div key={item.title}>
                <p className="text-gray-400 m-3 mt-4 uppercase">{item.title}</p>
                {item?.links.map((link) => (
                  <Link
                    href={link.name}
                    key={link.name}
                    className={
                      isLinkActive
                        ? 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2'
                        : 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-gray-700 text-md dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2'
                    }
                  >
                    {link.icon}
                    <span className="capitalize">{link.name}</span>
                  </Link>
                ))}
              </div>
            ))}
          </menu>
        </>
      )}
    </div>
  );
};
