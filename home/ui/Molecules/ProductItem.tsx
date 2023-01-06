import { Text } from '@/ui/Atoms/Text';
import { MediaDisplay } from '@/ui/Molecules/MediaDisplay';

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
    <div className={'flex flex-row bg-red-600'}>
      <div className={'bg-vercel-blue'}>
        {/*<MediaDisplay />*/}
        <Text kind={'default'} color={'red'}>
          #TODO add image
        </Text>
      </div>
      <div className={'flex flex-col'}>
        <Text kind={'title'}>{title}</Text>
        <Text kind={'subtitle'}>{area}</Text>
        <Text kind={'default'}>{text}</Text>
      </div>
    </div>
  );
};
