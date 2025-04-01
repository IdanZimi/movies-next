import { describe, test, expect } from '@jest/globals';
import { render, fireEvent, screen } from '@testing-library/react';
import MoviesList from './MoviesList';

describe('MoviesList', () => {
  const mockMovies = [
    { 
      id: 1, 
      title: 'Test Movie 1',
      released: 2023,
      rating: "8.5",
      synopsis: 'Test synopsis 1'
    },
    { 
      id: 2, 
      title: 'Test Movie 2',
      released: 2022,
      rating: "7.8",
      synopsis: 'Test synopsis 2'
    }
  ];

  test('renders all movies', () => {
    render(<MoviesList movies={mockMovies} />);
    expect(screen.getByText('Test Movie 1 (2023)')).toBeInTheDocument();
    expect(screen.getByText('Test Movie 2 (2022)')).toBeInTheDocument();
  });

  test('opens modal when movie is clicked', () => {
    render(<MoviesList movies={mockMovies} />);
    const readMoreButton = screen.getByText('Test Movie 1 (2023)').parentElement.nextElementSibling;
    fireEvent.click(readMoreButton);
    expect(screen.getByRole('presentation')).toBeInTheDocument();
  });

  test('closes modal when close button is clicked', () => {
    render(<MoviesList movies={mockMovies} />);
    const readMoreButton = screen.getByText('Test Movie 1 (2023)').parentElement.nextElementSibling;
    fireEvent.click(readMoreButton);
    const closeButton = screen.getByRole('button');
    fireEvent.click(closeButton);
    expect(screen.queryByRole('presentation')).not.toBeInTheDocument();
  });
}); 