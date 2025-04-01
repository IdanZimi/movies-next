import { useState, useEffect } from 'react';
import SearchFilters from '../SearchFilters/SearchFilters';
import MoviesList from '../MoviesList/MoviesList';
import Loading from '../Loading/Loading';
import Error from '../Error/Error';
import apiService from '../../services/apiService';
import './MainContent.css';

const RANGE = {
  YEAR: { MIN_IDX: 0, MAX_IDX: 1 },
  RATING: { MIN_IDX: 0, MAX_IDX: 1 }
};

function MainContent() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const data = await apiService.getAllMovies();
      setMovies(data);
      setFilteredMovies(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const handleSearch = ({ title, yearRange, ratingRange }) => {
    const filtered = movies.filter(movie => {
      const matchesTitle = movie.title.toLowerCase().includes(title.toLowerCase());
      if (!matchesTitle) return false;

      const year = parseInt(movie.released);
      if (yearRange[RANGE.YEAR.MIN_IDX] > year || yearRange[RANGE.YEAR.MAX_IDX] < year) return false;

      const rating = parseFloat(movie.rating);
      if (ratingRange[RANGE.RATING.MIN_IDX] > rating || ratingRange[RANGE.RATING.MAX_IDX] < rating) return false;

      return true;
    });

    setFilteredMovies(filtered);
  };

  return (
    <main>
      <div className="content-container">
        <h1 className="main-title">
          EXPLORE YOUR NEXT
          <br />
          MOVIES AND TV SHOWS
        </h1>

        {error && <Error message={error} />}
        {loading && <Loading />}
        {!error && !loading && (
          movies.length ? (
            <>
              <SearchFilters onSearch={handleSearch} />
              <MoviesList movies={filteredMovies} />
            </>
          ) : (
            <div className="no-movies-message">
              <p>No movies found at the moment ...</p>
            </div>
          )
        )}
      </div>
    </main>
  );
}

export default MainContent; 