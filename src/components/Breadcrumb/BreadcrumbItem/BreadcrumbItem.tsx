// Libs
import Link from 'next/link';
import { BreadcrumbItem as BreadcrumbItemChakra } from '@chakra-ui/react';

// Types
import { IBreadcrumbItem } from '@types';

const BreadcrumbItem = ({
  label,
  href,
  isCurrentPage = false,
}: IBreadcrumbItem) => (
  <BreadcrumbItemChakra
    {...(isCurrentPage && { color: 'currentPageBreadcrumb' })}
    isCurrentPage={isCurrentPage}
  >
    <Link href={href}>{label}</Link>
  </BreadcrumbItemChakra>
);
export default BreadcrumbItem;
