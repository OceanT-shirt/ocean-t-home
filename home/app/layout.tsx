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
            <div className="grid grid-cols-[1fr,minmax(auto,240px),min(800px,100%),1fr] gap-x-8 py-8">
              <div className="col-start-2">
                <GlobalNav />
              </div>

              <div className="col-start-3 space-y-6">
                <div className="rounded-xl border border-zinc-800 bg-white p-8">
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
                    href="https://github.com/vercel/next.js/examples/with-turbopack"
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
