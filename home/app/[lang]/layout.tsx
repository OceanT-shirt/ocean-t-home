import '@/styles/dist.css';
import React from 'react';
import GlobalNav from './GlobalNav';
import Header from '@/ui/Organisms/Header';
import RootStyleRegistry from './RootStyleRegistry';

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
      <body className="flex-col overflow-y-scroll bg-brand-background">
        <RootStyleRegistry>
          <>
            <Header />
            <div className="mx-auto w-[100vw] min-w-[40rem] max-w-[90rem]">
              <div className="relative flex min-h-[80vh] flex-row">
                <div className="absolute bottom-0 left-0 z-10 w-56 pb-5 pl-5">
                  <GlobalNav />
                </div>

                <div className="mx-auto w-full max-w-[65rem] p-4">
                  {children}
                </div>
              </div>

              {/* TODO add: footer */}
              <div className="col-start-3 col-end-4 mt-28 flex items-center justify-center">
                <div className="text-sm text-zinc-600">
                  Built with <b>Next.js</b>
                  {'. '}
                  <a
                    className="underline decoration-dotted underline-offset-4"
                    href="https://github.com/OceanT-shirt/ocean-t-home/tree/main/home"
                  >
                    View the code
                  </a>
                </div>
              </div>
            </div>
          </>
        </RootStyleRegistry>
      </body>
    </html>
  );
}
