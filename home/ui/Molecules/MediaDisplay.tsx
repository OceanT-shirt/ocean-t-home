'use client';

import Carousel from 'react-material-ui-carousel';

export const MediaDisplay = ({
  mediaArray,
}: {
  mediaArray?: { alt: string; url: string; type: 'img' | 'video' }[];
}) => {
  // TODO: add video player
  // TODO: add onclick
  return (
    <Carousel duration={2000} className={'w-full'}>
      {mediaArray &&
        mediaArray.map((m) => {
          return (
            <div
              className={'flex h-48 flex-col justify-center'}
              key={mediaArray.indexOf(m)}
            >
              {m.type == 'img' && (
                <img src={m.url} alt={m.alt} className={'object-cover'} />
              )}
            </div>
          );
        })}
    </Carousel>
  );
};
