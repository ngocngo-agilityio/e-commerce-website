'use client';

// Libs
import { memo, useCallback, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';

// Actions
import { logout } from '@actions';

// Icons
import { UserIcon } from '@assets';

// Constants
import { APP_ROUTERS } from '@constants';

// Components
import { LoadingIndicator } from '@components';

const UserProfile = (): JSX.Element => {
  const [isLogout, startTransition] = useTransition();
  const router = useRouter();

  const handleLogout = useCallback(() => {
    startTransition(async () => {
      await logout();
      router.push(APP_ROUTERS.SIGN_IN);
    });
  }, [router]);

  return (
    <>
      {isLogout && <LoadingIndicator />}
      <Menu>
        <MenuButton aria-label="profile-menu">
          <UserIcon />
        </MenuButton>

        <MenuList p="10px">
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};

export default memo(UserProfile);
