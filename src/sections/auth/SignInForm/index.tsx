'use client';

import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

// Actions
import { signInWithEmail } from '@actions';

// Hooks
import { useCustomToast } from '@hooks';

// Constants
import { APP_ROUTERS, SUCCESS_MESSAGES } from '@constants';

// Components
import { LoginForm } from '@components';
import { ISignInForm } from '@components/LoginForm';

const SignIn = (): JSX.Element => {
  const { showToast } = useCustomToast();
  const router = useRouter();

  const handleSignIn = useCallback(
    async (data: ISignInForm) => {
      const res = await signInWithEmail(data);

      if (typeof res === 'string') {
        showToast(res);
      } else {
        showToast(SUCCESS_MESSAGES.LOGIN, 'success');

        return router.push(APP_ROUTERS.HOME_PAGE);
      }
    },
    [router, showToast],
  );

  return <LoginForm onSignIn={handleSignIn} />;
};

export default SignIn;
