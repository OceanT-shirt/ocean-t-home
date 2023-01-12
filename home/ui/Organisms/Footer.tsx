import React from 'react';

export const Footer = () => {
  return (
    <footer className="footer footer-center rounded bg-base-200 p-10 text-base-content">
      <div className={'flex items-center justify-center'}>
        <div className="text-sm text-zinc-600">
          Built with <b>Next.js 13</b>
          {', '}
          deployed on <b>App Engine</b>
          {'. '}
          <a
            className="underline decoration-dotted underline-offset-4"
            href="https://github.com/OceanT-shirt/ocean-t-home/tree/main/home"
          >
            View the code / Submit issue (Welcome!)
          </a>
        </div>
      </div>
      <div>
        <p>Copyright © 2023 - All right reserved by Haruka Takahira</p>
      </div>
    </footer>
  );
};
