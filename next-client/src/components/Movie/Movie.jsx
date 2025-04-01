import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import './Movie.css';
import { SX_STYLES } from './styles';


const Movie = ({ movie, onClick }) => {
  return (
    <Card className="movie-card" sx={SX_STYLES.CARD}>
      <CardMedia component="img" sx={SX_STYLES.MOVIE_IMG} image={movie.image} alt={movie.title} />
      <CardContent sx={SX_STYLES.CARD_CONTENT}>
        <div className="movie-info">
          <Typography variant="h6" component="div" sx={SX_STYLES.MOVIE_INFO_TITLE}>
            {movie.title} ({movie.released})
          </Typography>
          <div className="movie-rating">
            <Typography variant="body2" sx={SX_STYLES.MOVIE_RATING}>
              <StarIcon sx={{ fontSize: '1rem', color: '#FFD700' }} />
              {movie.rating}
            </Typography>
          </div>
        </div>
        <Button variant="outlined" onClick={onClick} className="read-more-button"
          sx={SX_STYLES.MOVIE_READ_MORE_BUTTON}>
          Read more →
        </Button>
      </CardContent>
    </Card>
  );
};

export default Movie; 