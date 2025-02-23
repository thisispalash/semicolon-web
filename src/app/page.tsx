import Image from 'next/image';
import clsx from 'clsx';

import Link from '@/component/Link';

export default function Home() {
  return (
    <main 
      className={clsx(
        'p-4 h-screen w-full',
        'flex flex-col items-center justify-between'
      )}
    >
      {/* Header */}
      <div className="text-background">
        dummy
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2 items-center justify-center">
        <Image src="/arms-400.png" alt="logo" width={200} height={100} />
        <h1 className="text-4xl">Semicolon Fingers</h1>
        <p className="font-user text-2xl">Addressing the loneliness epidemic in the world</p>
      </div>

      {/* Footer */}
      <div className="flex flex-row gap-12 items-center justify-center">
        <Link href="#"><span className="text-lg">emptyyourmug</span></Link>
        <Link href="#"><span className="text-lg">pullmythread</span></Link>
      </div>

    </main>
  );
}
