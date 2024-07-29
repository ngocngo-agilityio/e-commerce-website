/**
 * Handle return a object from search params
 * @param searchParams
 * @returns queryParam object
 */
export const getSearchParams = (
  searchParams: URLSearchParams,
): Record<string, string> => {
  const queryParam: Record<string, string> = {};

  searchParams.forEach((value, key) => {
    queryParam[key] = value;
  });

  return queryParam;
};

/**
 * Handle return a url search params
 * @param searchParams - a url search params need updated
 * @param key
 * @param value
 * @returns a url search params
 */
export const updateSearchParams = (
  searchParams: URLSearchParams,
  key: string,
  value: string,
): URLSearchParams => {
  const params = new URLSearchParams(searchParams);

  if (value) {
    params.set(key, value);
  } else {
    params.delete(key);
  }

  return params;
};

/**
 * Formats a URL with query parameters
 * @param endpoint - The base API endpoint
 * @param query - An object containing query parameter
 * @returns - The formatted URL with query parameters
 */
export const formatUrlWithQuery = (
  endpoint: string,
  query: Record<string, string | string[] | number | number[] | undefined>,
): string => {
  const params = new URLSearchParams(
    Object.entries(query)
      .filter(([, value]) => value !== undefined)
      .flatMap(([key, value]) =>
        Array.isArray(value)
          ? value.map((val) => [key, String(val)])
          : [[key, String(value)]],
      ),
  );

  return params.toString() ? `${endpoint}?${params.toString()}` : endpoint;
};
