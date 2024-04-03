'use client';
import { Flex, Heading } from '@chakra-ui/react';

import { Filter, Sort, ProductCard } from '@components';

export default function Home() {
  return (
    <>
      <Heading>Home Page</Heading>

      <Flex>
        <Filter
          options={[
            { value: '1', label: 'Women' },
            { value: '2', label: 'Man' },
            { value: '3', label: 'Casual' },
          ]}
          onChange={(value: string[]) => {
            console.log(value, '=======');
          }}
        />

        <Sort
          options={[
            { value: '1', label: 'Increment by name' },
            { value: '2', label: 'Decrement by name' },
          ]}
          onChange={(value) => {
            console.log(value);
          }}
        />
      </Flex>

      <ProductCard />
    </>
  );
}
