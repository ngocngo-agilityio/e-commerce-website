// Libs
import Image from 'next/image';
import { Box, Button, Container, Flex, Heading } from '@chakra-ui/react';

// Constants
import { BANNER_BG } from '@constants';

const SaleBanner = (): JSX.Element => {
  return (
    <Box>
      <Container
        display="flex"
        justifyContent="end"
        h="648px"
        maxW="1367px"
        pos="relative"
      >
        <Flex w="40%" flexDir="column" alignItems="center" pr="39px" pt="202px">
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
        <Image
          src={BANNER_BG}
          alt="Banner Image"
          style={{ position: 'absolute', zIndex: -1 }}
          fill
          priority
        />
      </Container>
    </Box>
  );
};

export default SaleBanner;
