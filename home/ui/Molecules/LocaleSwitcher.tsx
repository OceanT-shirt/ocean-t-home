'use client';

import { usePathname, useRouter } from 'next/navigation';
import { i18n } from '@/lib/i18n-config';
import { IconButton } from '@/ui/Atoms/IconButton';
import { FaGlobe } from 'react-icons/all';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Text } from '@/ui/Atoms/Text';

export default function LocaleSwitcher({ isCompact = false }: { isCompact?: boolean }) {
  const [isCompactState, setIsCompactState] = useState<boolean>(false);

  // To Prevent Hydration Error
  useEffect(() => setIsCompactState(isCompact), [isCompact])

  const pathName = usePathname();
  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/';
    const segments = pathName.split('/');
    segments[1] = locale;
    return segments.join('/');
  };
  const router = useRouter();
  const optionsDivRef = useRef<HTMLDivElement>(null);
  const handleOptions = (isOpen: boolean) => {
    if (optionsDivRef && optionsDivRef.current)
      optionsDivRef.current.style.display = isOpen ? 'block' : 'none';
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
    <div>
      {isCompactState ? (
        <div className={"flex flex-row items-center gap-x-2"}>
          <IconButton
            icon={FaGlobe}
            onClick={() => {
              handleOptions(true);
            }}
            className={'cursor-pointer'}
          />
          <div
            className={'hidden flex flex-row'}
            ref={optionsDivRef}
          >
            {i18n.locales.map((locale) => {
              return (
                <div className={"mx-2"}>
                  <Text
                    kind={"header"}
                    className={'cursor-pointer hover:text-brand-sub text-brand-background uppercase'}
                    key={i18n.locales.indexOf(locale)}
                    onClick={() => router.push(redirectedPathName(locale))}
                  >
                    {locale}
                  </Text>
                </div>
              );
            })}
          </div>
        </div>
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
