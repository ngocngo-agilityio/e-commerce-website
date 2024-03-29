// Libs
import { Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';

// Constants
import { NAVIGATION } from '@constants';

const Navigation = (): JSX.Element => {
  return (
    <Flex as="nav" gap="30px" wrap="wrap">
      {NAVIGATION.map((item, index) => {
        const { title, path } = item;

        return (
          <Link key={`navigation-header-${index}`} href={path}>
            <Text
              as="span"
              textTransform="uppercase"
              fontFamily="arimo"
              fontWeight="bold"
              size="xs"
              color="navigation.color"
            >
              {title}
            </Text>
          </Link>
        );
      })}
    </Flex>
  );
};

export default Navigation;
