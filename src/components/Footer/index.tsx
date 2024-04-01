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
        <Flex pt="65px" pb="115px" justifyContent="space-between">
          <Flex gap="210px" wrap="wrap">
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
          </Flex>

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
              <Input placeholder="Enter email" variant="flushed" w="247px" />
              <ArrowRightIcon />
            </HStack>
          </Box>
        </Flex>

        <Divider />

        <Flex pt="30px" pb="42px" justifyContent="space-between">
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

          <HStack spacing="16px">
            <Link href="#">
              <VisaIcon />
            </Link>
            <Link href="#">
              <MasterCardIcon />
            </Link>
            <Link href="#">
              <PaypalIcon />
            </Link>
            <Link href="#">
              <VisaElectronIcon />
            </Link>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
