import React from 'react';
import { Modal, Box, Typography, Button, Rating } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './MovieDetailModal.css';

const SX_STYLES = {
    BACK_BUTTON: {
        'align-self': 'flex-start',
        'padding': '0.75rem 1.5rem',
        'border-radius': '25px',
        'text-transform': 'none',
        'font-size': '1rem',
        'background-color': '#004d40',
        'transition': 'transform 0.2s ease',
        'margin-top': '1.5rem',
        '&:hover': {
            'transform': 'translateX(-10px)',
        }
    },
    MODAL_CONTENT: {
        'display': 'flex',
        'gap': '2.5rem',
        'background-color': 'white',
        'border-radius': '12px',
        'padding': '2.5rem',
        'max-width': '1000px',
        '@media (max-width: 414px)': {
            'display': 'flex',
            'flex-direction': 'column',
            'gap': '2rem',
        }
    },
}
const MovieDetailModal = ({ movie, open, onClose }) => {
    if (!movie) return null;

    return (
        <Modal open={open} onClose={onClose} aria-labelledby="movie-detail-modal" className="movie-modal">
            <Box className="modal-content" sx={SX_STYLES.MODAL_CONTENT}>
                <div className="movie-poster">
                    <img src={movie.largeimage || movie.image} alt={movie.title} />
                </div>

                <div className="modal-movie-info" sx={SX_STYLES.MODAL_MOVIE_INFO}>
                    <Typography variant="h4" component="h2" className="movie-title">
                        {movie.title}
                    </Typography>

                    <div className="movie-meta">
                        <Typography variant="body1" color="text.secondary">
                            {movie.released} • {(movie.runtime)}
                        </Typography>

                        <div className="rating-container">
                            <Rating value={parseFloat(movie.rating) / 2} precision={0.1} readOnly size="large" />
                            <Typography variant="h6">
                                {movie.rating}/10
                            </Typography>
                        </div>
                    </div>

                    <Typography variant="body1" className="synopsis"
                     dangerouslySetInnerHTML={{ __html: movie.synopsis }}
                    />

                    <Button variant="contained" onClick={onClose} className="back-button"
                     sx={SX_STYLES.BACK_BUTTON} startIcon={<ArrowBackIcon />}>
                        Back to list
                    </Button>
                </div>
            </Box>
        </Modal>
    );
};

export default MovieDetailModal;
