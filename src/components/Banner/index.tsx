// Libs
import { Box, Button, Container, Flex, Heading } from '@chakra-ui/react';

// Constants
import { BANNER_BG } from '@constants';

// Components
import { Image } from '@components';

const SaleBanner = (): JSX.Element => {
  return (
    <Container pos="relative" maxW="1367px" p={0}>
      <Box pos="relative" w="100%" aspectRatio="1367/648" zIndex={-1}>
        <Image
          priority
          fill
          src={BANNER_BG}
          fallbackSrc={BANNER_BG}
          alt="Banner Image"
          sizes="100vw"
          style={{ objectFit: 'cover' }}
        />
      </Box>

      <Flex
        position="absolute"
        flexDir="column"
        alignItems="center"
        zIndex={2}
        right={{ base: '5%', md: '7%' }}
        gap={{ base: 4, sm: 6, lg: 12 }}
        top={{ base: '15%', sm: '18%', md: '31%' }}
        left={{ base: '5%', md: 'auto' }}
      >
        <Heading
          textTransform="uppercase"
          color="bannerHeading"
          fontFamily="lato"
          fontWeight="extrabold"
          textAlign="center"
          fontSize={{ base: '2xl', sm: '3xl', md: '4xl', lg: '5xl' }}
        >
          stylist picks beat the heat
        </Heading>
        <Button
          variant="outline"
          fontWeight="bold"
          fontSize={{ base: 'md', md: 'xl', lg: '2xl' }}
          w={{ base: '120px', md: '150px', lg: '176px' }}
          h={{ base: '40px', md: '50px', lg: '58px' }}
        >
          SHOP NOW
        </Button>
      </Flex>
    </Container>
  );
};

export default SaleBanner;
