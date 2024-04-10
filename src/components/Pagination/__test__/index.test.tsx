import { render, fireEvent } from '@testing-library/react';
import Pagination from '..';

const mockReplace = jest.fn();
jest.mock('next/navigation', () => ({
  usePathname: jest.fn().mockReturnValue('/example/path'),
  useRouter: jest.fn().mockReturnValue({ replace: () => mockReplace }),
  useSearchParams: jest.fn().mockReturnValue(new URLSearchParams('page=1')),
}));

describe('Pagination component', () => {
  it('renders pagination with correct number of pages', () => {
    const { container } = render(<Pagination pagesQuantity={5} />);

    expect(container).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('calls setCurrentPage and replace on page change', () => {
    const { getByText } = render(<Pagination pagesQuantity={5} />);

    fireEvent.click(getByText('2'));
  });
});
