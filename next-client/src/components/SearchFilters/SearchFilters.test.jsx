import { jest, describe, test, expect } from '@jest/globals';
import { render, fireEvent, screen } from '@testing-library/react';
import SearchFilters from './SearchFilters';

describe('SearchFilters', () => {
  const mockHandlers = {
    onTitleChange: jest.fn(),
    onYearChange: jest.fn(),
    onRatingChange: jest.fn()
  };

  test('renders all filter sections', () => {
    render(<SearchFilters {...mockHandlers} />);
    expect(screen.getByLabelText('Search by text...')).toBeInTheDocument();
    expect(screen.getByText('Filter by Year')).toBeInTheDocument();
    expect(screen.getByText('Filter by Rating')).toBeInTheDocument();
  });

  test('expands accordion sections when clicked', () => {
    render(<SearchFilters {...mockHandlers} />);
    fireEvent.click(screen.getByText('Filter by Year'));
    expect(screen.getByRole('region')).toBeVisible();
  });
}); 