'use client';

import { ProductItem } from '@/ui/Molecules/ProductItem';
import { HeadingText } from '@/ui/Atoms/Text';
import { ProductProps } from '../../models/product';

interface Props {
  items: ProductProps[];
}

export const ProductItemList = ({ items }: Props) => {
  return (
    <div className={'flex flex-col'}>
      <div className={'my-4'}>
        {/* TODO add multilingual text */}
        <HeadingText kind={'h2'}>Products</HeadingText>
      </div>
      <div className={'flex flex-col gap-y-4'}>
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
