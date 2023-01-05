import { ProductItem } from '@/ui/Molecules/ProductItem';
import Text from '@/ui/Atoms/Text';

interface Props {
  items: {
    title: string;
    area: string;
    text: string;
    techTags: string[];
  }[];
}

export const ProductItemList = ({ items }: Props) => {
  return (
    <div className={'flex flex-col'}>
      <div className={'my-2'}>
        {/* TODO add multilingual text */}
        <Text kind={'h1'}>Products</Text>
      </div>
      {/*<div className={"flex flex-col gap-y-2"}>*/}
      {/*    {items.map((item) => {*/}
      {/*        return (*/}
      {/*            <ProductItem title={item.title} area={item.area} text={item.text} techTags={item.techTags} />*/}
      {/*        )*/}
      {/*    })}*/}
      {/*</div>*/}
    </div>
  );
};
