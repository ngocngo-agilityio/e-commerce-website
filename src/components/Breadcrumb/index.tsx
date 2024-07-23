// Libs
import { Breadcrumb as BreadcrumbChakra } from '@chakra-ui/react';
import isEqual from 'react-fast-compare';
import { memo } from 'react';

// Components
import BreadcrumbItem from './BreadcrumbItem/BreadcrumbItem';

// Types
import { IBreadcrumbItem } from '@types';

interface BreadcrumbItemProps {
  breadcrumb?: IBreadcrumbItem[];
}

const Breadcrumb = ({ breadcrumb = [] }: BreadcrumbItemProps): JSX.Element => (
  <BreadcrumbChakra>
    {breadcrumb.map((item, index) => {
      const { label = '', href = '', isCurrentPage = false } = item || {};

      return (
        <BreadcrumbItem
          key={`breadcrumb-item--${label}-${index}`}
          label={label}
          href={href}
          isCurrentPage={isCurrentPage}
        />
      );
    })}
  </BreadcrumbChakra>
);
export default memo(Breadcrumb, isEqual);
