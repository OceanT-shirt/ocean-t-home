import { ProductItem } from '@/ui/Molecules/ProductItem';
import { HeadingText } from '@/ui/Atoms/Text';

interface Props {
  items: {
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
  }[];
}

export const ProductItemList = ({ items }: Props) => {
  return (
    <div className={'flex flex-col'}>
      <div className={'my-2'}>
        {/* TODO add multilingual text */}
        <HeadingText kind={'h2'}>Products</HeadingText>
      </div>
      <div className={'flex flex-col gap-y-2'}>
        {items.map((item) => {
          return (
            <ProductItem
              title={item.title}
              area={item.area}
              text={item.text}
              techTags={item.techTags}
              mediaUrls={item.mediaUrls}
              links={item.links}
              key={items.indexOf(item)}
            />
          );
        })}
      </div>
    </div>
  );
};
