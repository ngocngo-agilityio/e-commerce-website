// Libs
import {
  Box,
  Container,
  Divider,
  Flex,
  HStack,
  Input,
  Text,
} from '@chakra-ui/react';
import Link from 'next/link';

// Constants
import { FOOTER_MENU } from '@constants';
import {
  ArrowRightIcon,
  MasterCardIcon,
  PaypalIcon,
  VisaElectronIcon,
  VisaIcon,
} from '@assets';

const Footer = (): JSX.Element => {
  return (
    <Box as="footer" bg="footer.bg">
      <Container>
        <Flex
          pt="65px"
          pb="115px"
          wrap="wrap"
          gap="50px"
          justifyContent="space-between"
        >
          {FOOTER_MENU.map((item, index) => {
            const { heading, items } = item;

            return (
              <Box key={`${heading}-${index}`}>
                <Text
                  size="xs"
                  fontFamily="arimo"
                  fontWeight="bold"
                  color="footer.text"
                  textTransform="uppercase"
                  mb="26px"
                >
                  {heading}
                </Text>

                {items.map((subMenu, index) => {
                  const { title, path } = subMenu;

                  return (
                    <Link key={`${title}-${index}`} href={path}>
                      <Text
                        size="xl"
                        lineHeight="28px"
                        color="footer.text"
                        textTransform="capitalize"
                      >
                        {title}
                      </Text>
                    </Link>
                  );
                })}
              </Box>
            );
          })}

          <Box>
            <Text
              size="xs"
              fontFamily="arimo"
              fontWeight="bold"
              color="footer.text"
              textTransform="uppercase"
              mb="26px"
            >
              get in the know
            </Text>
            <HStack>
              <Input placeholder="Enter email" variant="flushed" maxW="247px" />
              <ArrowRightIcon />
            </HStack>
          </Box>
        </Flex>

        <Divider />

        <Flex
          pt="30px"
          pb="42px"
          justifyContent="space-between"
          flexDir={{ base: 'column', md: 'row' }}
          gap={{ base: '20px', md: 0 }}
        >
          <Box>
            <Text fontSize="md" lineHeight="28px" color="footer.text">
              © 2020 NorthStar eCommerce
            </Text>
            <HStack gap="10px">
              <Link href="#">
                <Text fontSize="md" lineHeight="28px" color="footer.text">
                  Privacy Policy
                </Text>
              </Link>
              <Link href="#">
                <Text fontSize="md" lineHeight="28px" color="footer.text">
                  Terms & Conditions
                </Text>
              </Link>
            </HStack>
          </Box>

          <Flex gap="16px" wrap="wrap">
            <Link href="#" aria-label="visa">
              <VisaIcon />
            </Link>
            <Link href="#" aria-label="mastercard">
              <MasterCardIcon />
            </Link>
            <Link href="#" aria-label="paypal">
              <PaypalIcon />
            </Link>
            <Link href="#" aria-label="visa-electron">
              <VisaElectronIcon />
            </Link>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
