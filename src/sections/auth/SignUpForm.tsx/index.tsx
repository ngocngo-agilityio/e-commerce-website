'use client';

import { useCallback } from 'react';
import { useRouter } from 'next/navigation';

// Actions
import { signUp, createCart } from '@actions';

// Hooks
import { useCustomToast } from '@hooks';

// Constants
import { APP_ROUTERS, SUCCESS_MESSAGES } from '@constants';

// Types
import { IUser } from '@types';

// Components
import { SignUpForm } from '@components';

const SignUp = (): JSX.Element => {
  const { showToast } = useCustomToast();
  const router = useRouter();

  const handleSignUp = useCallback(
    async (data: Omit<IUser, 'id'>) => {
      const signUpRes = await signUp(data);

      const { error: signUpError, user } = signUpRes || {};

      if (signUpError) {
        return showToast(signUpError);
      }

      const { id: userId = '' } = user || {};

      const createCartRes = await createCart([], userId);

      const { error: createCartError } = createCartRes || {};

      if (createCartError) {
        return showToast(createCartError);
      }

      showToast(SUCCESS_MESSAGES.SIGN_UP, 'success');

      return router.push(APP_ROUTERS.SIGN_IN);
    },
    [router, showToast],
  );

  return <SignUpForm onSignUp={handleSignUp} />;
};

export default SignUp;
