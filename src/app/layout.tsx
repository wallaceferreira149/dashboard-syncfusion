'use client';
import { Open_Sans } from '@next/font/google';
import { FiSettings } from 'react-icons/fi';
import { Notification } from '../components/common/Notification/Notification';
import { Sidebar } from '../components/layout/Sidebar/Sidebar';
import {
  GlobalContextProvider,
  useStateContext,
} from '../context/GlobalContext';
import './globals.css';

const openSans = Open_Sans({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { activeMenu } = useStateContext();
  const isMenuActive = true;
  return (
    <html lang="pt-br" className={openSans.className}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <GlobalContextProvider>
          <div className="flex relative dark:bg-main-dark-bg">
            {/* Settings icon*/}
            <div className="fixed right-4 bottom-4 z-50">
              <Notification content="settings">
                <button
                  className={`text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray rounded-full bg-blue-400 duration-300 text-white`}
                  type="button"
                >
                  <FiSettings />
                </button>
              </Notification>
            </div>

            {/* Sidebar colapse*/}
            {isMenuActive ? (
              <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
                <Sidebar />
              </div>
            ) : (
              <div className="w-0 dark:bg-secondary-dark-bg">Sidebar</div>
            )}
            {/* Navbar colapse*/}
            <div
              className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${
                isMenuActive ? 'md:ml-72' : 'flex-1'
              }`}
            >
              <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
                Navbar
              </div>
            </div>
          </div>
          <main className="">{children}</main>
        </GlobalContextProvider>
      </body>
    </html>
  );
}
