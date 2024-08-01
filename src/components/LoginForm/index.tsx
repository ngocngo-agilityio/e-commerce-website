'use client';

import { memo } from 'react';
import {
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
  Button,
} from '@chakra-ui/react';
import Link from 'next/link';
import { Controller, useForm } from 'react-hook-form';

interface ISignInForm {
  email: string;
  password: string;
}

const LoginForm = (): JSX.Element => {
  const { control } = useForm<ISignInForm>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  return (
    <Flex as="form" flexDir="column" w={{ base: 'full', md: '400px' }} gap={7}>
      <Flex flexDir="column">
        <FormLabel>Email</FormLabel>

        <Controller
          name="email"
          control={control}
          render={({ field: { onChange, ...rest }, fieldState: { error } }) => (
            <FormControl isInvalid={!!error}>
              <Input {...rest} placeholder="Your email" onChange={onChange} />

              <FormErrorMessage>{error?.message}</FormErrorMessage>
            </FormControl>
          )}
        />
      </Flex>

      <Flex flexDir="column">
        <FormLabel>Password</FormLabel>
        <Controller
          name="password"
          control={control}
          render={({ field: { onChange, ...rest }, fieldState: { error } }) => (
            <FormControl isInvalid={!!error}>
              <Input
                {...rest}
                type="password"
                placeholder="Enter password"
                onChange={onChange}
              />

              <FormErrorMessage>{error?.message}</FormErrorMessage>
            </FormControl>
          )}
        />
      </Flex>

      <Link href="#">
        <Text pt={3} textAlign="end">
          Forgot password
        </Text>
      </Link>

      <Button mt={5} w="full" fontSize="xl">
        LOGIN
      </Button>
    </Flex>
  );
};

export default memo(LoginForm);
