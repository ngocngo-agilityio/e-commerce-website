'use client';

import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';

// Actions
import { signInWithEmail } from '@actions';

// Hooks
import { useCustomToast } from '@hooks';

// Constants
import { APP_ROUTERS } from '@constants';

// Components
import { LoginForm } from '@components';
import { ISignInForm } from '@components/LoginForm';

const SignIn = (): JSX.Element => {
  const [isPending, setIsPending] = useState(false);
  const { showToast } = useCustomToast();
  const router = useRouter();

  const handleSignIn = useCallback(
    async (data: ISignInForm) => {
      setIsPending(true);

      const res = await signInWithEmail(data);

      if (typeof res === 'string') {
        setIsPending(false);

        return showToast(res);
      }

      return router.push(APP_ROUTERS.HOME_PAGE);
    },
    [router, showToast],
  );

  return <LoginForm onSignIn={handleSignIn} isPending={isPending} />;
};

export default SignIn;
