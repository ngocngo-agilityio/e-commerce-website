'use client';

import { Heading } from '@chakra-ui/react';

// Components
import { Filter } from '@components';

export default function Home() {
  return (
    <>
      <Heading>Home Page</Heading>
      <Filter
        options={[
          { id: '1', name: 'Women' },
          { id: '2', name: 'Man' },
          { id: '3', name: 'Casual' },
        ]}
        onChange={(value) => {
          console.log('>>>>>>>>>', value);
        }}
      />
    </>
  );
}
