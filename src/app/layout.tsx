'use client';
import { Open_Sans } from '@next/font/google';
import { registerLicense } from '@syncfusion/ej2-base';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { FiSettings } from 'react-icons/fi';
import './globals.css';

registerLicense(
  'Mgo+DSMBaFt/QHRqVVhjVFpFaV1FQmFJfFBmTGlZeVRzcUUmHVdTRHRdQ19hQXxSd01hWHxfdHE=;Mgo+DSMBPh8sVXJ0S0J+XE9HflRDQmFOYVF2R2BJdlRwcl9FZUwxOX1dQl9hSHxRfkdiWHdccXdWQmU=;ORg4AjUWIQA/Gnt2VVhkQlFadVdJXHxLeUx0RWFab1d6dFNMY1lBJAtUQF1hS39RdE1hWH5WcnVWQ2VZ;ODM0MjQxQDMyMzAyZTM0MmUzMExYQkpQMmFObXpLaTk3S2lvOEJZQ2tBMFR1RjdjZjRqczdSNGhEV01iMzg9;ODM0MjQyQDMyMzAyZTM0MmUzMGNaRUJVMks4S2hxYUNsbFd4WFViM2RMMjhPeFdVaEJKRXMwcUgvamR5YTg9;NRAiBiAaIQQuGjN/V0Z+WE9EaFxKVmJWfFRpR2NbfE55flVAal9UVBYiSV9jS3xSdEdrW35feHZUQmZfVA==;ODM0MjQ0QDMyMzAyZTM0MmUzMFRXVFNUdlZBbWI0bmxEaG9takcxSldGdnlmVlI1MWFTblpPVXJXK3NzV1k9;ODM0MjQ1QDMyMzAyZTM0MmUzMGtOWlpwdW5oalBKQ3M1aHJpbEdHMWxGUjZTNGNsWjI3N0JNTktZdXM3U3M9;Mgo+DSMBMAY9C3t2VVhkQlFadVdJXHxLeUx0RWFab1d6dFNMY1lBJAtUQF1hS39RdE1hWH5WcnVQQmBZ;ODM0MjQ3QDMyMzAyZTM0MmUzMGpwbGJIQUFZdUdub3FkeFZPWS9KZGw3cTRza09uM055V1FJOVhOejJldmc9;ODM0MjQ4QDMyMzAyZTM0MmUzMEhuWHBoc3ZJdnAyOGM4eGltN1JjS2pvZkh4a2VxUG1GSDVnOGpaY1lOMVE9;ODM0MjQ5QDMyMzAyZTM0MmUzMFRXVFNUdlZBbWI0bmxEaG9takcxSldGdnlmVlI1MWFTblpPVXJXK3NzV1k9'
);
const openSans = Open_Sans({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isMenuActive = true;
  return (
    <html lang="pt-br" className={openSans.className}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <div className="flex relative dark:bg-main-dark-bg">
          {/* Settings icon*/}
          <div className="fixed right-4 bottom-4 z-50">
            <TooltipComponent content="settings" position="BottomRight">
              <button
                className={`text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray rounded-full bg-blue-400 duration-300 text-white`}
                type="button"
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>

          {/* Sidebar colapse*/}
          {isMenuActive ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
              Sidebar
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
      </body>
    </html>
  );
}
