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
    <div className={'grid grid-cols-4'}>
      <div className={'col-span-2 h-52'}>
        <MediaDisplay mediaArray={mediaUrls} />
      </div>
      <div className={'col-span-2 ml-4 h-52 gap-y-4'}>
        <div className={'w-9/12'}>
          <Text kind={'title'}>{title}</Text>
          <Text kind={'subtitle'}>{area}</Text>
        </div>
        <div>
          <div className={'max-h-20 overflow-hidden'}>
            <Text kind={'default'} className={'break-words'}>
              {text}
            </Text>
          </div>
          <TagList tags={techTags} />
        </div>
      </div>
    </div>
  );
};
