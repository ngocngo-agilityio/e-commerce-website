// Types
import { ITag } from '@types';

// Components
import { Tag } from '@components';

interface TagListProps {
  tags: ITag[];
  onClose: (id: number) => void;
}

const TagList = ({ tags, onClose }: TagListProps): JSX.Element => {
  return (
    <>
      {tags.map((tag) => {
        const { id, label = '' } = tag || {};

        return <Tag key={id} id={id} label={label} onClose={onClose} />;
      })}
    </>
  );
};

export default TagList;
