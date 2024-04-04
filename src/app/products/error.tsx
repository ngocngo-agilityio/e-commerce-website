'use client';

// Components
import { ErrorBoundary } from '@components';

const ErrorProducts = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  return <ErrorBoundary error={error} reset={reset} />;
};

export default ErrorProducts;
