export const SX_STYLES = {
    MOVIE_INFO_TITLE: {
        color: 'black',
        fontSize: '1rem',
        fontWeight: 600,
        mb: 1,
        display: '-webkit-box',
        WebkitLineClamp: 2,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        lineHeight: 1.2,
        height: '2.4em'
    },
    MOVIE_RATING: {
        display: 'flex',
        alignItems: 'center',
        gap: 0.5,
        color: 'black',
        fontWeight: 'bold'
    },
    MOVIE_READ_MORE_BUTTON: {
        textTransform: 'none',
        color: 'black',
        mt: 'auto',
        borderColor: 'black',
        borderRadius: '20px',
        padding: '4px 12px',
        minWidth: 'auto',
        width: '100%',
        alignSelf: 'flex-start',
        '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.04)',
            borderColor: 'black'
        }
    },
    MOVIE_IMG: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        position: 'relative',
        aspectRatio: '2/3'
    },
    CARD_CONTENT: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        padding: '5px'
    },
    CARD: {
        transition: 'transform 0.5s ease',
        position: 'relative',
        boxShadow: 'none',
        backgroundColor: 'transparent',
        '&:hover': { transform: 'scale(1.05)' }
    }
}