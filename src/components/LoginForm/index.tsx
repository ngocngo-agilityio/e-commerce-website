'use client';

import { memo, useCallback } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
  Button,
  InputRightElement,
  InputGroup,
  useDisclosure,
} from '@chakra-ui/react';

// Constants
import { ERROR_MESSAGES, REGEX } from '@constants';

// Utils
import { isEnableSubmitButton } from '@utils';

export interface ISignInForm {
  email: string;
  password: string;
}

const REQUIRE_FIELDS = ['email', 'password'];

const SIGN_IN_VALIDATION_RULE = {
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
};

export interface ISignInFormProps {
  isSubmitting?: boolean;
  onSignIn: (data: ISignInForm) => void;
}

const LoginForm = ({
  isSubmitting = false,
  onSignIn,
}: ISignInFormProps): JSX.Element => {
  const { isOpen: isShowPassword, onToggle: onTogglePassword } =
    useDisclosure();

  const {
    handleSubmit,
    control,
    clearErrors,
    formState: { dirtyFields, errors },
  } = useForm<ISignInForm>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const dirtyItems = Object.keys(dirtyFields).filter(
    (key) => dirtyFields[key as keyof ISignInForm],
  );
  const shouldEnable = isEnableSubmitButton(REQUIRE_FIELDS, dirtyItems, errors);
  const isDisableSubmit = !shouldEnable || isSubmitting;

  // Clear error when typing that field.
  const handleOnChange = useCallback(
    (fieldName: keyof ISignInForm) => {
      clearErrors(fieldName);
    },
    [clearErrors],
  );

  const handleSignIn = useCallback(
    (data: ISignInForm) => onSignIn(data),
    [onSignIn],
  );

  return (
    <Flex
      as="form"
      flexDir="column"
      w={{ base: 'full', md: '460px' }}
      gap={7}
      onSubmit={handleSubmit(handleSignIn)}
    >
      <Flex flexDir="column">
        <FormLabel>Email</FormLabel>

        <Controller
          name="email"
          control={control}
          rules={SIGN_IN_VALIDATION_RULE.email}
          render={({ field: { onChange, ...rest }, fieldState: { error } }) => (
            <FormControl isInvalid={!!error}>
              <Input
                {...rest}
                placeholder="Your email"
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
          rules={SIGN_IN_VALIDATION_RULE.password}
          render={({ field: { onChange, ...rest }, fieldState: { error } }) => (
            <FormControl isInvalid={!!error}>
              <InputGroup>
                <Input
                  {...rest}
                  type={isShowPassword ? 'text' : 'password'}
                  placeholder="Enter password"
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
                  data-testid="view-icon"
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

      <Text
        pt={3}
        textAlign="end"
        color="black"
        fontWeight="bold"
        fontSize="md"
      >
        Forgot password
      </Text>

      <Button
        type="submit"
        borderRadius="sm"
        w="full"
        fontSize="xl"
        isDisabled={isDisableSubmit}
        isLoading={isSubmitting}
      >
        Sign in
      </Button>
    </Flex>
  );
};

export default memo(LoginForm);
