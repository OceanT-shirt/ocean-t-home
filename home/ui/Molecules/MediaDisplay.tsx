'use client';

import Carousel from 'react-material-ui-carousel';
import Image from 'next/image';

export const MediaDisplay = ({
  mediaArray,
}: {
  mediaArray?: { alt: string; url: string; type: 'img' | 'video' }[];
}) => {
  // TODO: add video player
  // TODO: add onclick
  return (
    <Carousel duration={3000} className={'h-full w-full bg-white'}>
      {mediaArray &&
        mediaArray.map((m) => {
          return (
            <div
              className={'flex h-full flex-col justify-center'}
              key={mediaArray.indexOf(m)}
            >
              {m.type == 'img' && m.url != '' ? (
                // <img src={m.url} alt={m.alt} className={'object-cover'} />
                <Image src={m.url} alt={m.alt} width={400} height={300} sizes="100%" style={{width: '100%', height: 'auto'}} />
              ) : (
                <Image src={'/no_image.png'} alt={'no image'} width={400} height={300} sizes="100%" style={{width: '100%', height: 'auto'}} />
              )}
            </div>
          );
        })}
    </Carousel>
  );
};
