# Next Movies Client

A React-based movie browsing application that allows users to search and filter movies by various criteria.

## Features

- Search movies by title
- Filter movies by year range
- Filter movies by rating range
- Detailed movie information in modal view
- Modern UI with Material-UI components

## Prerequisites

- Node.js (v18.12.1 or higher)
- npm (v8.19.2 or higher)

## Installation

1. Clone the repository:
```bash
git clone <https://github.com/IdanZimi/next-movies.git>
cd next-movies/next-client
```

2. Install dependencies:
```bash
npm install
```
3. Run the server at /next-movies/next-test

## Development

To start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Testing

The project uses Jest and React Testing Library for testing.

To run all tests:
```bash
npm test
```

To run tests in watch mode:
```bash
npm run test:watch
```

To run specific tests:
```bash
npm test -- <test-file-name>
# Example: npm test -- SearchBar.test.jsx
```

## Project Structure

```
next-client/
├── src/
│   ├── components/
|   |   ├── MainContent/ 
│   │   ├── MoviesList/
│   │   ├── MovieDetailModal/
│   │   ├── SearchFilters/
│   │   └── Movie/
│   ├── services/
│   ├── assets/
│   ├── App.jsx
│   └── main.jsx
├── public/
└── tests/
```

## Technologies Used

- React 19.0.0
- Vite 6.2.0
- Material-UI 7.0.1
- React Testing Library 16.2.0
- Jest 29.7.0
- ESLint 9.21.0
- Axios 1.8.4


## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm test` - Run tests
- `npm run test:watch` - Run tests in watch mode

## Component Documentation

### SearchFilters
- Provides filtering functionality for movies
- Includes search by title, year range, and rating filters
- Uses Material-UI Accordion for collapsible sections

### MoviesList
- Displays movies in a responsive grid layout
- Handles movie selection and modal display
- Responsive design for various screen sizes

### MovieDetailModal
- Shows detailed information about selected movies
- Displays title, year, rating, and synopsis

### SearchBar
- Text input for movie title search
- Real-time search functionality
- Material-UI TextField implementation

## Info

- [Vite](https://vitejs.dev/) for the build tooling
- [Material-UI](https://mui.com/) for the component library
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) for testing utilities
