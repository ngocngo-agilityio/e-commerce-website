'use client';

// Libs
import { memo } from 'react';
import { Menu, MenuButton } from '@chakra-ui/react';

// Icons
import { UserIcon } from '@assets';

const UserProfile = (): JSX.Element => {
  return (
    <Menu>
      <MenuButton aria-label="profile-menu">
        <UserIcon />
      </MenuButton>
    </Menu>
  );
};

export default memo(UserProfile);
