'use client';

import { IconBaseProps, IconType } from 'react-icons';
import clsx from 'clsx';

export const IconButton = ({
  icon,
  className,
}: IconBaseProps & { icon: IconType }) => {
  return (
    <>
      {icon({
        className: clsx(
          'fill-brand-background hover:fill-brand-sub ease-out duration-200',
          className ?? '',
        ),
      })}
    </>
  );
};
