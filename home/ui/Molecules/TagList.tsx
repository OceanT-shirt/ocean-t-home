import { Tag } from '@/ui/Atoms/Tag';

export const TagList = ({ tags }: { tags: string[] }) => {
  return (
    <div className={'flex flex-row space-x-2 overflow-x-auto'}>
      {tags.map((tag) => (
        <Tag text={tag} kind={'default'} key={tags.indexOf(tag)} />
      ))}
    </div>
  );
};
