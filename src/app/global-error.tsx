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
  return (
    <html>
      <body>
        <ErrorBoundary error={error} reset={reset} />
      </body>
    </html>
  );
};

export default GlobalError;
