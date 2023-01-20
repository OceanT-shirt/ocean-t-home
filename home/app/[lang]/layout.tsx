import '@/styles/dist.css';
import React from 'react';
import GlobalNav from './GlobalNav';
import Header from '@/ui/Organisms/Header';
import RootStyleRegistry from './RootStyleRegistry';
import { Footer } from '@/ui/Organisms/Footer';

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <html lang={params.lang}>
      <head>
        <title>Haruka Takahira's Portfolio</title>
      </head>
      <body className="appearance-none flex-col bg-brand-background accent-brand-main">
        <RootStyleRegistry>
          <>
            <Header />
            <div className="mx-auto max-w-[90rem]">
              <div className="relative flex min-h-[80vh] flex-row">
                {/*<div className="absolute bottom-0 left-0 z-10 w-56 pb-5 pl-5">*/}
                {/*  /!*<GlobalNav />*!/*/}
                {/*</div>*/}

                <div className="mx-auto w-full max-w-[65rem] p-4">
                  {children}
                </div>
              </div>
            </div>
            <Footer />
          </>
        </RootStyleRegistry>
      </body>
    </html>
  );
}
