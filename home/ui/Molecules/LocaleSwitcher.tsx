'use client';

import { usePathname, useRouter } from 'next/navigation';
import { i18n } from '@/lib/i18n-config';
import { IconButton } from '@/ui/Atoms/IconButton';
import { FaGlobe } from 'react-icons/all';
import { useEffect, useRef } from 'react';

export default function LocaleSwitcher({ isCompact }: { isCompact?: boolean }) {
  const pathName = usePathname();
  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/';
    const segments = pathName.split('/');
    segments[1] = locale;
    return segments.join('/');
  };
  const router = useRouter();
  const optionRef = useRef<HTMLUListElement>(null);
  const optionsDivRef = useRef<HTMLDivElement>(null);
  const handleOptions = (isOpen: boolean) => {
    if (optionRef && optionRef.current)
      optionRef.current.style.display = isOpen ? 'block' : 'none';
  };
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (
        optionsDivRef.current &&
        !optionsDivRef.current.contains(event.target)
      )
        handleOptions(false);
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [optionsDivRef]);

  return (
    <div className={'relative'}>
      {isCompact ? (
        <>
          <IconButton
            icon={FaGlobe}
            onClick={() => {
              handleOptions(true);
            }}
            className={'cursor-pointer'}
          />
          <div className={'z-10'} ref={optionsDivRef}>
            <ul
              ref={optionRef}
              className={
                'menu rounded-box absolute right-2 hidden w-20 bg-white p-2'
              }
            >
              {i18n.locales.map((locale) => {
                return (
                  <li>
                    <a
                      key={i18n.locales.indexOf(locale)}
                      onClick={() => router.push(redirectedPathName(locale))}
                    >
                      {locale}
                    </a>
                  </li>
                );
              })}
            </ul>
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
