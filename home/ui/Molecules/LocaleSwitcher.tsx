'use client';

import { usePathname, useRouter } from 'next/navigation';
import { i18n } from '@/lib/i18n-config';

export default function LocaleSwitcher() {
  const pathName = usePathname();
  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/';
    const segments = pathName.split('/');
    segments[1] = locale;
    return segments.join('/');
  };
  const router = useRouter();

  return (
    <div>
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
    </div>
  );
}
