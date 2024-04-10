// Libs
import { renderHook } from '@testing-library/react';

// Hooks
import { useCustomToast } from '../useCustomToast';

jest.mock('@chakra-ui/react', () => ({
  useToast: jest.fn().mockReturnValue(() => mockToast()),
}));

const mockToast = jest.fn();

describe('useCustomToast', () => {
  test('should call toast function with correct parameters when showToast is called', () => {
    const { result } = renderHook(() => useCustomToast());
    result.current.showToast('This is a success message', 'success');

    expect(mockToast).toHaveBeenCalled();
  });
});
