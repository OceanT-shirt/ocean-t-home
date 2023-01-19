import { Text } from '@/ui/Atoms/Text';
import { MediaDisplay } from '@/ui/Molecules/MediaDisplay';
import { TagList } from '@/ui/Molecules/TagList';

interface Props {
  title: string;
  area: string;
  text: string;
  techTags: string[];
  mediaUrls: {
    alt: string;
    type: 'img' | 'video';
    url: string;
  }[];
  links: {
    title: string;
    url: string;
  }[];
}

export const ProductItem = ({
  title,
  area,
  text,
  techTags,
  mediaUrls,
  links,
}: Props) => {
  // TODO: add responsive transform
  return (
    <div className={'grid grid-cols-2 lg:grid-cols-4'}>
      <div className={'col-span-2 w-full flex flex-col mb-4 lg:mb-0'}>
        <MediaDisplay mediaArray={mediaUrls} />
      </div>
      <div className={'col-span-2 flex h-56 flex-col justify-between lg:pl-4'}>
        <div className={'flex-grow gap-y-4'}>
          <div className={'w-9/12'}>
            <Text kind={'title'}>{title}</Text>
            <Text kind={'subtitle'}>{area}</Text>
          </div>
          <div className={'h-full max-h-24 flex-wrap overflow-hidden'}>
            <Text kind={'default'} className={'break-words'}>
              {text}
            </Text>
          </div>
        </div>
        <div className={''}>
          <TagList tags={techTags} />
        </div>
      </div>
    </div>
  );
};
