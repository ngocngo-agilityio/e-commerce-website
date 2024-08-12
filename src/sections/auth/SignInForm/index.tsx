'use client';

import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { showToast } = useCustomToast();
  const router = useRouter();

  const handleSignIn = useCallback(
    async (data: ISignInForm) => {
      setIsSubmitting(true);

      const res = await signInWithEmail(data);

      setIsSubmitting(false);

      if (typeof res === 'string') {
        showToast(res);
      } else {
        showToast(SUCCESS_MESSAGES.LOGIN, 'success');

        return router.push(APP_ROUTERS.HOME_PAGE);
      }
    },
    [router, showToast],
  );

  return <LoginForm onSignIn={handleSignIn} isSubmitting={isSubmitting} />;
};

export default SignIn;
