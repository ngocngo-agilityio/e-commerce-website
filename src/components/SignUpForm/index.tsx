'use client';

import { memo, useCallback, useTransition } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Button,
  InputRightElement,
  InputGroup,
  useDisclosure,
} from '@chakra-ui/react';

// Constants
import { ERROR_MESSAGES, REGEX } from '@constants';

// Utils
import { isEnableSubmitButton } from '@utils';

// Types
import { IUser } from '@types';

export interface ISignUpForm {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const REQUIRE_FIELDS = [
  'firstName',
  'lastName',
  'email',
  'password',
  'confirmPassword',
];

export interface ISignUpFormProps {
  onSignUp: (data: Omit<IUser, 'id'>) => void;
}

const SignUpForm = ({ onSignUp }: ISignUpFormProps): JSX.Element => {
  const [isSubmitting, startTransition] = useTransition();
  const { isOpen: isShowPassword, onToggle: onTogglePassword } =
    useDisclosure();
  const { isOpen: isShowConfirmPassword, onToggle: onToggleConfirmPassword } =
    useDisclosure();

  const {
    handleSubmit,
    control,
    clearErrors,
    watch,
    formState: { dirtyFields, errors },
  } = useForm<ISignUpForm>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const SIGN_UP_VALIDATION_RULE = {
    firstName: {
      required: ERROR_MESSAGES.FIELD_REQUIRED('First Name'),
    },
    lastName: {
      required: ERROR_MESSAGES.FIELD_REQUIRED('Last Name'),
    },
    email: {
      required: ERROR_MESSAGES.FIELD_REQUIRED('Email'),
      pattern: {
        value: REGEX.EMAIL,
        message: ERROR_MESSAGES.FIELD_INVALID('Email'),
      },
    },
    password: {
      required: ERROR_MESSAGES.FIELD_REQUIRED('Password'),
      minLength: { value: 8, message: ERROR_MESSAGES.PASSWORD_NOT_LONG },
    },
    confirmPassword: {
      required: ERROR_MESSAGES.FIELD_REQUIRED('Confirm Password'),
      validate: (value: string) => {
        if (watch('password') !== value) {
          return ERROR_MESSAGES.PASSWORD_NOT_MATCH;
        }
      },
    },
  };

  const dirtyItems = Object.keys(dirtyFields).filter(
    (key) => dirtyFields[key as keyof ISignUpForm],
  );
  const shouldEnable = isEnableSubmitButton(REQUIRE_FIELDS, dirtyItems, errors);
  const isDisableSubmit = !shouldEnable || isSubmitting;

  // Clear error when typing that field.
  const handleOnChange = useCallback(
    (fieldName: keyof ISignUpForm) => {
      clearErrors(fieldName);
    },
    [clearErrors],
  );

  const handleSignUp = useCallback(
    (data: ISignUpForm) => {
      startTransition(() => {
        const { firstName, lastName, email, password } = data;

        const payload = {
          firstName,
          lastName,
          email,
          password,
        };

        onSignUp(payload);
      });
    },
    [onSignUp],
  );

  return (
    <Flex
      as="form"
      flexDir="column"
      w={{ base: 'full', md: '460px' }}
      gap={7}
      onSubmit={handleSubmit(handleSignUp)}
    >
      <Flex gap={5} flexDir={{ base: 'column', md: 'row' }}>
        <Flex flexDir="column" flex={1}>
          <FormLabel>First Name</FormLabel>

          <Controller
            name="firstName"
            control={control}
            rules={SIGN_UP_VALIDATION_RULE.firstName}
            render={({
              field: { onChange, ...rest },
              fieldState: { error },
            }) => (
              <FormControl isInvalid={!!error}>
                <Input
                  {...rest}
                  placeholder="First name"
                  isDisabled={isSubmitting}
                  onChange={(e) => {
                    const value = e.target?.value;

                    handleOnChange('firstName');
                    onChange(value);
                  }}
                />

                <FormErrorMessage>{error?.message}</FormErrorMessage>
              </FormControl>
            )}
          />
        </Flex>

        <Flex flexDir="column" flex={1}>
          <FormLabel>Last Name</FormLabel>

          <Controller
            name="lastName"
            control={control}
            rules={SIGN_UP_VALIDATION_RULE.lastName}
            render={({
              field: { onChange, ...rest },
              fieldState: { error },
            }) => (
              <FormControl isInvalid={!!error}>
                <Input
                  {...rest}
                  placeholder="Last name"
                  isDisabled={isSubmitting}
                  onChange={(e) => {
                    const value = e.target?.value;

                    handleOnChange('lastName');
                    onChange(value);
                  }}
                />

                <FormErrorMessage>{error?.message}</FormErrorMessage>
              </FormControl>
            )}
          />
        </Flex>
      </Flex>

      <Flex flexDir="column">
        <FormLabel>Email</FormLabel>

        <Controller
          name="email"
          control={control}
          rules={SIGN_UP_VALIDATION_RULE.email}
          render={({ field: { onChange, ...rest }, fieldState: { error } }) => (
            <FormControl isInvalid={!!error}>
              <Input
                {...rest}
                placeholder="Email"
                isDisabled={isSubmitting}
                onChange={(e) => {
                  const value = e.target?.value;

                  handleOnChange('email');
                  onChange(value);
                }}
              />

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
          rules={SIGN_UP_VALIDATION_RULE.password}
          render={({ field: { onChange, ...rest }, fieldState: { error } }) => (
            <FormControl isInvalid={!!error}>
              <InputGroup>
                <Input
                  {...rest}
                  type={isShowPassword ? 'text' : 'password'}
                  placeholder="Password"
                  isDisabled={isSubmitting}
                  onChange={(e) => {
                    const value = e.target?.value;

                    handleOnChange('password');
                    onChange(value);
                  }}
                />
                <InputRightElement
                  onClick={onTogglePassword}
                  style={{ cursor: 'pointer' }}
                >
                  {isShowPassword ? (
                    <ViewOffIcon boxSize={5} />
                  ) : (
                    <ViewIcon boxSize={5} />
                  )}
                </InputRightElement>
              </InputGroup>

              <FormErrorMessage>{error?.message}</FormErrorMessage>
            </FormControl>
          )}
        />
      </Flex>

      <Flex flexDir="column">
        <FormLabel>Confirm Password</FormLabel>
        <Controller
          name="confirmPassword"
          control={control}
          rules={SIGN_UP_VALIDATION_RULE.confirmPassword}
          render={({ field: { onChange, ...rest }, fieldState: { error } }) => (
            <FormControl isInvalid={!!error}>
              <InputGroup>
                <Input
                  {...rest}
                  type={isShowConfirmPassword ? 'text' : 'password'}
                  placeholder="Confirm password"
                  isDisabled={isSubmitting}
                  onChange={(e) => {
                    const value = e.target?.value;

                    handleOnChange('confirmPassword');
                    onChange(value);
                  }}
                />
                <InputRightElement
                  onClick={onToggleConfirmPassword}
                  style={{ cursor: 'pointer' }}
                >
                  {isShowConfirmPassword ? (
                    <ViewOffIcon boxSize={5} />
                  ) : (
                    <ViewIcon boxSize={5} />
                  )}
                </InputRightElement>
              </InputGroup>

              <FormErrorMessage>{error?.message}</FormErrorMessage>
            </FormControl>
          )}
        />
      </Flex>

      <Button
        mt={5}
        type="submit"
        borderRadius="sm"
        w="full"
        fontSize="xl"
        isDisabled={isDisableSubmit}
        isLoading={isSubmitting}
      >
        Sign up
      </Button>
    </Flex>
  );
};

export default memo(SignUpForm);
