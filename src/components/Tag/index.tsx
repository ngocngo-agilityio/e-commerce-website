'use client';

// Libs
import { memo, useCallback } from 'react';
import { Tag as TagChakra, TagCloseButton, TagLabel } from '@chakra-ui/react';

// Types
import { ITag } from '@types';

interface TagProps extends ITag {
  onClose: (id: number) => void;
}

const Tag = ({ id, label, onClose }: TagProps): JSX.Element => {
  const handleClose = useCallback(() => {
    onClose(id);
  }, [id, onClose]);

  return (
    <TagChakra
      size={{ base: 'md', md: 'lg' }}
      key={id}
      borderRadius="full"
      variant="solid"
      colorScheme="orange"
    >
      <TagLabel>{label}</TagLabel>
      <TagCloseButton onClick={handleClose} />
    </TagChakra>
  );
};

export default memo(Tag);
