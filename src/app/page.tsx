'use client';

import { Flex, Heading } from '@chakra-ui/react';

import { Sort } from '@components';

export default function Home() {
  return (
    <>
      <Heading>Home Page</Heading>
      <Flex ml="200px">
        <Sort
          options={[
            { value: '1', label: 'Increment  by name' },
            { value: '2', label: 'Decrement  by name' },
          ]}
          onChange={(value) => {
            console.log('value', value);
          }}
        />
      </Flex>
    </>
  );
}
