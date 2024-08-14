'use client';

import { useCallback, useState } from 'react';
import { useRouter } from 'next/navigation';

// Actions
import { signUp, createCart, signInWithEmail } from '@actions';

// Hooks
import { useCustomToast } from '@hooks';

// Constants
import { APP_ROUTERS } from '@constants';

// Types
import { IUser } from '@types';

// Components
import { SignUpForm } from '@components';

const SignUp = (): JSX.Element => {
  const [isPending, setIsPending] = useState(false);
  const { showToast } = useCustomToast();
  const router = useRouter();

  const handleSignUp = useCallback(
    async (data: Omit<IUser, 'id'>) => {
      setIsPending(true);

      // Call API to create a new account
      const signUpRes = await signUp(data);

      const { error: signUpError, user } = signUpRes || {};

      if (signUpError) {
        setIsPending(false);

        return showToast(signUpError);
      }

      const { id: userId = '' } = user || {};

      // Call API to create cart for user that has just sign up successfully
      const createCartRes = await createCart([], userId);

      const { error: createCartError } = createCartRes || {};

      if (createCartError) {
        setIsPending(false);

        return showToast(createCartError);
      }

      // If sign up and creating cart for a new user successfully,
      // login with that account to navigate user to Home page
      const { email, password } = data;
      const signInRes = await signInWithEmail({ email, password });

      if (typeof signInRes === 'string') {
        setIsPending(false);

        return showToast(signInRes);
      }

      return router.push(APP_ROUTERS.HOME_PAGE);
    },
    [router, showToast],
  );

  return <SignUpForm onSignUp={handleSignUp} isPending={isPending} />;
};

export default SignUp;
