'use client';

import { usePathname, useRouter } from 'next/navigation';
import { i18n } from '@/lib/i18n-config';
import { IconButton } from '@/ui/Atoms/IconButton';
import { FaGlobe } from 'react-icons/all';
import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

export default function LocaleSwitcher({ isCompact }: { isCompact?: boolean }) {
  const pathName = usePathname();
  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/';
    const segments = pathName.split('/');
    segments[1] = locale;
    return segments.join('/');
  };
  const router = useRouter();
  const optionRef = useRef<HTMLDivElement>(null);
  const handleOptions = (isOpen: boolean) => {
    if (optionRef && optionRef.current)
      optionRef.current.style.display = isOpen ? 'block' : 'none';
  };

  return (
    <div>
      {isCompact ? (
        <>
          <IconButton
            icon={FaGlobe}
            onClick={() => {
              handleOptions(true);
            }}
            className={'cursor-pointer'}
          />
          <div ref={optionRef} className={'hidden cursor-pointer'}>
            {i18n.locales.map((locale) => {
              return (
                <a
                  key={i18n.locales.indexOf(locale)}
                  onClick={() => router.push(redirectedPathName(locale))}
                >
                  {locale}
                </a>
              );
            })}
          </div>
        </>
      ) : (
        <select
          className="select-ghost select w-full max-w-xs text-base font-semibold uppercase tracking-wider text-zinc-300"
          onChange={(event) =>
            router.push(redirectedPathName(event.target.value))
          }
        >
          <option disabled selected>
            Select Language
          </option>
          {i18n.locales.map((locale) => {
            return <option key={i18n.locales.indexOf(locale)}>{locale}</option>;
          })}
        </select>
      )}
    </div>
  );
}
