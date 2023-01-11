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
    <Carousel duration={3000} className={'h-full w-full'}>
      {mediaArray &&
        mediaArray.map((m) => {
          return (
            <div
              className={'flex h-full flex-col justify-center'}
              key={mediaArray.indexOf(m)}
            >
              {m.type == 'img' && m.url != '' ? (
                <img src={m.url} alt={m.alt} className={'object-cover'} />
              ) : (
                <img
                  src={'/no_image.png'}
                  alt={'no image'}
                  className={'object-cover'}
                />
              )}
            </div>
          );
        })}
    </Carousel>
  );
};
