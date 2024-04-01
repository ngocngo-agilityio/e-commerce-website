// Libs
import { Icon } from '@chakra-ui/react';

const PaypalIcon = (): JSX.Element => {
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
          xlinkHref="#image0_713_275"
          transform="matrix(0.015873 0 0 0.0261438 0 -0.00980392)"
        />
      </pattern>
      <image
        id="image0_713_275"
        width="63"
        height="39"
        xlinkHref="data:image/png;base64,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"
      />
    </Icon>
  );
};

export default PaypalIcon;
