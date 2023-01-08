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
    <div className={'flex h-56 flex-row'}>
      <div className={'flex h-56 w-96 flex-col'}>
        <MediaDisplay mediaArray={mediaUrls} />
      </div>
      <div className={'ml-4 flex flex-col gap-y-2'}>
        <Text kind={'title'}>{title}</Text>
        <Text kind={'subtitle'}>{area}</Text>
        <Text kind={'default'}>{text}</Text>
        <TagList tags={techTags} />
      </div>
    </div>
  );
};
