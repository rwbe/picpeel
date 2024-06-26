'use client';

import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from 'next-themes';
import { FC, ReactNode } from 'react';

interface AppProvidersProps {
  children: ReactNode;
}


const AppProviders: FC<AppProvidersProps> = ({ children }) => {
  return (
    <>
      <ThemeProvider attribute="class" disableTransitionOnChange defaultTheme="light" enableSystem>
        {children}
        <Toaster />
      </ThemeProvider>
    </>
  );
};

export default AppProviders;
