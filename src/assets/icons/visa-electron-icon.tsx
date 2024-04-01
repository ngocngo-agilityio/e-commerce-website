// Libs
import { Icon } from '@chakra-ui/react';

const VisaElectronIcon = (): JSX.Element => {
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
          xlinkHref="#image0_713_276"
          transform="matrix(0.015873 0 0 0.0261438 0 -0.00980392)"
        />
      </pattern>
      <image
        id="image0_713_276"
        width="63"
        height="39"
        xlinkHref="data:image/png;base64,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"
      />
    </Icon>
  );
};

export default VisaElectronIcon;
