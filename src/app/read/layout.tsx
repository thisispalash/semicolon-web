'use client';

import clsx from 'clsx';

import ReaderProvider from '@/context/ReaderContext';

import Sidebar from '@/component/sidebar/Sidebar';
import WrappedAccount from '@/component/account/WrappedAccount';
import ShuffleButton from '@/component/shuffle/ShuffleButton';

export default function ReadLayout({ children }: { children: React.ReactNode }) {
  return (
    <ReaderProvider>

      {/* Sidebar */}
      <Sidebar />

      {/* Account */}
      <div className={clsx(
        'fixed top-0 right-0 p-4'
      )}>
        <WrappedAccount />
      </div>

      {/* Main */}
      {children}

      {/* Shuffle */}
      <ShuffleButton />


    </ReaderProvider>
  );
}