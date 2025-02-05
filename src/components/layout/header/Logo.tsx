'use client';

import { LogoImage } from '@/components/images/LogoImage';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link
      href="/"
      className="flex items-center gap-x-4 transition-opacity hover:opacity-75"
    >
      <LogoImage />
      <h2 className="hidden lg:block tracking-wider text-lg font-semibold text-accent-foreground">
        Lumenway
      </h2>
    </Link>
  );
};

export default Logo;
