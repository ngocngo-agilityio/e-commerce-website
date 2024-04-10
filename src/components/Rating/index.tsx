// Libs
import { memo } from 'react';
import { Box } from '@chakra-ui/react';

// /Assets
import { StarIcon } from '@assets';

interface Props {
  rating: number;
}

const Rating = ({ rating }: Props): JSX.Element => {
  return (
    <Box display="flex" alignItems="center">
      {Array(5)
        .fill('')
        .map((_, i) => (
          <StarIcon
            key={i}
            color={i < rating ? '#D6763C' : 'rgba(214, 118, 60, 0.38)'}
          />
        ))}
    </Box>
  );
};

export default memo(Rating);
