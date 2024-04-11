// Libs
import Image from 'next/image';
import { Button, Container, Flex, Heading } from '@chakra-ui/react';

// Constants
import { BANNER_BG } from '@constants';

const SaleBanner = (): JSX.Element => {
  return (
    <Container pos="relative" maxW="1367px">
      <Container display="flex" justifyContent="end" h="648px">
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
          style={{
            position: 'absolute',
            zIndex: -1,
            justifyItems: 'center',
            left: 0,
          }}
          height={648}
          width={1367}
          priority
        />
      </Container>
    </Container>
  );
};

export default SaleBanner;
