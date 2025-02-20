// Libs
import { Icon } from '@chakra-ui/react';

const VisaIcon = (): JSX.Element => (
  <Icon
    xmlns="http://www.w3.org/2000/svg"
    width="56px"
    height="34px"
    viewBox="0 0 56 34"
    fill="none"
  >
    <rect width="56" height="34" fill="url(#pattern0)" />
    <defs>
      <pattern
        id="pattern0"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use
          xlinkHref="#image0_713_273"
          transform="matrix(0.0155678 0 0 0.025641 0.00961538 0)"
        />
      </pattern>
      <image
        id="image0_713_273"
        width="63"
        height="39"
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </Icon>
);

export default VisaIcon;
