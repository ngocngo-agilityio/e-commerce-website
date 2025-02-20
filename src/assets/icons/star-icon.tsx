// Libs
import { Icon } from '@chakra-ui/react';

interface Props {
  color: string;
}

const StarIcon = ({ color }: Props): JSX.Element => {
  return (
    <Icon
      xmlns="http://www.w3.org/2000/svg"
      width="15px"
      height="14px"
      viewBox="0 0 15 14"
      fill="none"
    >
      <path
        d="M6.76367 1.08203L5.11328 4.45898L1.38086 4.99219C0.720703 5.09375 0.466797 5.90625 0.949219 6.38867L3.61523 9.00391L2.98047 12.6855C2.87891 13.3457 3.58984 13.8535 4.17383 13.5488L7.5 11.7969L10.8008 13.5488C11.3848 13.8535 12.0957 13.3457 11.9941 12.6855L11.3594 9.00391L14.0254 6.38867C14.5078 5.90625 14.2539 5.09375 13.5938 4.99219L9.88672 4.45898L8.21094 1.08203C7.93164 0.498047 7.06836 0.472656 6.76367 1.08203Z"
        fill={color}
      />
    </Icon>
  );
};

export default StarIcon;
