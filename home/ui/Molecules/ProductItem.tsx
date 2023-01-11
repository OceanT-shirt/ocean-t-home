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
    <div className={'grid grid-cols-2 bg-yellow-100 lg:grid-cols-4'}>
      <div className={'col-span-2 h-52'}>
        <MediaDisplay mediaArray={mediaUrls} />
      </div>
      <div className={'col-span-2 ml-4 flex h-52 flex-col justify-between'}>
        <div className={'flex-grow gap-y-4 bg-blue-100'}>
          <div className={'w-9/12'}>
            <Text kind={'title'}>{title}</Text>
            <Text kind={'subtitle'}>{area}</Text>
          </div>
          <div className={'h-full max-h-20 flex-wrap overflow-hidden'}>
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
