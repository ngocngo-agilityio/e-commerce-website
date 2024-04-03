'use client';

// Libs
import { memo } from 'react';
import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';

// Icons
import { UserIcon } from '@assets';

interface UserProfileProps {
  // onLogout: () => void;
}

const UserProfile = ({}: UserProfileProps): JSX.Element => {
  // TODO: Update later
  const handleLogout = () => {};

  return (
    <Menu>
      <MenuButton aria-label="profile-menu">
        <UserIcon />
      </MenuButton>

      <MenuList p="10px">
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default memo(UserProfile);
