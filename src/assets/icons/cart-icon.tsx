// Libs
import { Icon } from '@chakra-ui/react';

const CartIcon = (): JSX.Element => (
  <Icon
    xmlns="http://www.w3.org/2000/svg"
    width="24px"
    height="25px"
    viewBox="0 0 24 25"
    fill="none"
  >
    <path
      d="M6 2.47607L3 6.47607V20.4761C3 21.0065 3.21071 21.5152 3.58579 21.8903C3.96086 22.2654 4.46957 22.4761 5 22.4761H19C19.5304 22.4761 20.0391 22.2654 20.4142 21.8903C20.7893 21.5152 21 21.0065 21 20.4761V6.47607L18 2.47607H6Z"
      stroke="#1D1D1D"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3 6.47607H21"
      stroke="#1D1D1D"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 10.4761C16 11.5369 15.5786 12.5544 14.8284 13.3045C14.0783 14.0546 13.0609 14.4761 12 14.4761C10.9391 14.4761 9.92172 14.0546 9.17157 13.3045C8.42143 12.5544 8 11.5369 8 10.4761"
      stroke="#1D1D1D"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Icon>
);

export default CartIcon;
