import { Text } from '@/ui/Atoms/Text';
import { MediaDisplay } from '@/ui/Molecules/MediaDisplay';
import { TagList } from '@/ui/Molecules/TagList';

interface Props {
  title: string;
  area: string;
  text: string;
  techTags: string[];
  // mediaUrls
  // links
}

export const ProductItem = ({ title, area, text, techTags }: Props) => {
  // TODO: add responsive transform
  return (
    <div className={'flex h-56 flex-row'}>
      <div className={'w-96 bg-vercel-blue'}>
        {/*<MediaDisplay />*/}
        <Text kind={'default'} color={'red'}>
          #TODO add image
        </Text>
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
