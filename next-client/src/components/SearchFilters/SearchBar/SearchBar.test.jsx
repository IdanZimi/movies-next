import { jest, describe, test, expect } from '@jest/globals';
import { render, fireEvent, screen } from '@testing-library/react';
import SearchBar from './SearchBar';

describe('SearchBar', () => {
  test('renders search input', () => {
    render(<SearchBar onSearch={() => {}} />);
    expect(screen.getByLabelText('Search by text...')).toBeInTheDocument();
  });

  test('calls onSearch when input changes', () => {
    const mockOnSearch = jest.fn();
    render(<SearchBar onSearch={mockOnSearch} />);
    
    const input = screen.getByLabelText('Search by text...');
    fireEvent.change(input, { target: { value: 'test movie' } });
    
    expect(mockOnSearch).toHaveBeenCalledWith('test movie');
  });
}); 