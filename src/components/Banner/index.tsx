// Libs
import { memo } from 'react';
import { Box, Button, Container, Flex, Heading } from '@chakra-ui/react';

// Constants
import { BANNER_BG } from '@constants';

const SaleBanner = (): JSX.Element => {
  return (
    <Box height="648px" bg={`url(${BANNER_BG}) no-repeat`} bgSize={'100% 100%'}>
      <Container>
        <Flex justifyContent="end">
          <Flex
            w="40%"
            flexDir="column"
            alignItems="center"
            pr="39px"
            pt="202px"
          >
            <Heading
              size="lg"
              textTransform="uppercase"
              color="bannerHeading"
              fontFamily="lato"
              fontWeight="extrabold"
              textAlign="center"
            >
              stylist picks beat the heat
            </Heading>
            <Button
              variant="outline"
              size="lg"
              fontWeight="bold"
              mt="48px"
              w="fit-content"
            >
              SHOP NOW
            </Button>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default memo(SaleBanner);
