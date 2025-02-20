// Libs
import { Icon } from '@chakra-ui/react';

const MasterCardIcon = (): JSX.Element => {
  return (
    <Icon
      xmlns="http://www.w3.org/2000/svg"
      width="56px"
      height="34px"
      viewBox="0 0 56 34"
      fill="none"
    >
      <rect width="56" height="34" fill="url(#pattern0)" />
      <pattern
        id="pattern0"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use
          xlinkHref="#image0_713_274"
          transform="matrix(0.015873 0 0 0.0261438 0 -0.00980392)"
        />
      </pattern>
      <image
        id="image0_713_274"
        width="63"
        height="39"
        xlinkHref="data:image/png;base64,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"
      />
    </Icon>
  );
};

export default MasterCardIcon;
