import { getSearchParams, updateSearchParams } from '../paramUrl';

describe('getSearchParams', () => {
  test('returns an empty object when searchParams is empty', () => {
    const searchParams = new URLSearchParams('');

    const result = getSearchParams(searchParams);

    expect(result).toEqual({});
  });

  test('returns the correct query parameters as key-value pairs', () => {
    const searchParams = new URLSearchParams(
      'param1=value1&param2=value2&param3=value3',
    );

    const result = getSearchParams(searchParams);

    expect(result).toEqual({
      param1: 'value1',
      param2: 'value2',
      param3: 'value3',
    });
  });
});

describe('updateSearchParams', () => {
  it('should add a new key-value pair to the search params', () => {
    const initialSearchParams = new URLSearchParams('foo=bar');
    const updatedParams = updateSearchParams(initialSearchParams, 'baz', 'qux');
    expect(updatedParams.get('baz')).toBe('qux');
  });

  it('should update an existing key-value pair in the search params', () => {
    const initialSearchParams = new URLSearchParams('foo=bar&baz=qux');
    const updatedParams = updateSearchParams(
      initialSearchParams,
      'baz',
      'updatedValue',
    );
    expect(updatedParams.get('baz')).toBe('updatedValue');
  });

  it('should delete a key-value pair if value is empty', () => {
    const initialSearchParams = new URLSearchParams('foo=bar&baz=qux');
    const updatedParams = updateSearchParams(initialSearchParams, 'baz', '');
    expect(updatedParams.get('baz')).toBeNull();
  });

  it('should return a new instance of URLSearchParams', () => {
    const initialSearchParams = new URLSearchParams();
    const updatedParams = updateSearchParams(
      initialSearchParams,
      'key',
      'value',
    );
    expect(updatedParams).toBeInstanceOf(URLSearchParams);
    expect(updatedParams).not.toBe(initialSearchParams);
  });
});
