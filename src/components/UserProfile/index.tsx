// Libs
import { memo } from 'react';
import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';

// Icons
import { UserIcon } from '@assets';

interface UserProfileProps {
  onLogout: () => void;
}

const UserProfile = ({ onLogout }: UserProfileProps): JSX.Element => {
  return (
    <Menu>
      <MenuButton aria-label="profile-menu">
        <UserIcon />
      </MenuButton>

      <MenuList>
        <MenuItem onClick={onLogout}>Logout</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default memo(UserProfile);
