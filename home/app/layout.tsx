import '@/styles/dist.css';
import React from 'react';
import GlobalNav from './GlobalNav';
import Header from '@/ui/Organisms/Header';
import RootStyleRegistry from './RootStyleRegistry';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>Haruka Takahira's Portfolio</title>
      </head>
      <body className="flex-col overflow-y-scroll bg-white">
        <RootStyleRegistry>
          <>
            <Header />
            <div className="flex flex-row gap-x-8 py-8">
              <div className="w-56">
                <GlobalNav />
              </div>

              <div className="flex flex-grow flex-col">
                <div className="mx-auto max-w-[65rem] rounded-xl border p-8">
                  {children}
                </div>
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
          </>
        </RootStyleRegistry>
      </body>
    </html>
  );
}
