import { useState } from 'react';
import Movie from '../Movie/Movie';
import MovieDetailModal from '../MovieDetailModal/MovieDetailModal';
import './MoviesList.css';

const MoviesList = ({ movies }) => {
    const [selectedMovie, setSelectedMovie] = useState(null);

    const handleMovieClick = (movie) => {
        setSelectedMovie(movie);
    };

    const handleCloseModal = () => {
        setSelectedMovie(null);
    };

    return (
        <div className="movies-grid">
            {movies.map((movie) => (
                <div key={movie.id} className="movie-item">
                    <Movie movie={movie} onClick={() => handleMovieClick(movie)}/>
                </div>
            ))}

            {selectedMovie && (
                <MovieDetailModal movie={selectedMovie} open={Boolean(selectedMovie)} onClose={handleCloseModal}/>
            )}
        </div>
    );
};

export default MoviesList;
