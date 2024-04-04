'use client';

// Components
import { ErrorBoundary } from '@components';

const GlobalError = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  return <ErrorBoundary error={error} reset={reset} />;
};

export default GlobalError;
