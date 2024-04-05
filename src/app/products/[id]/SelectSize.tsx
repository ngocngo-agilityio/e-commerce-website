'use client';

// Libs
import { memo } from 'react';
import isEqual from 'react-fast-compare';

// Types
import { SizeOption } from '@types';

// Components
import { SelectSize as SelectSizeComponent } from '@components';

interface Props {
  sizes: SizeOption[];
}

const SelectSize = ({ sizes }: Props): JSX.Element => {
  return <SelectSizeComponent options={sizes} onChange={() => {}} />;
};

export default memo(SelectSize, isEqual);
