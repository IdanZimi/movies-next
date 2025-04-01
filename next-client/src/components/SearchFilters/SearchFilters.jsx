import { useState } from 'react';
import { Box, Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import StarIcon from '@mui/icons-material/Star';
import SearchBar from './SearchBar/SearchBar';
import './SearchFilters.css';
import { Slider } from '@mui/material';

const SX_STYLES = {
    FILTER_ACCORDION: {
        "&:hover": { background: 'rgba(255, 255, 255, 0.58)' },
        'backdrop-filter': 'blur(10px)',
        'border': '1px solid rgba(228, 219, 219, 0.2)',
        'borderRadius': '8px',
        'boxShadow': '0 4px 30px rgba(0, 0, 0, 0.1)',
        'overflow': 'hidden',
        'background': 'rgba(250, 253, 251, 0.69)',
        '.MuiTypography-root': { 'fontWeight': '500', 'fontSize': '0.9rem' },
        '.MuiAccordionSummary-content': { 'margin': '4px 0', 'gap': '8px', 'alignItems': 'center' },
    },
    ACCORDION_ICON: {
        'color': '#00bcd4',
        'fontSize': '1.1rem',
    },
    FILTER_CONTAINER: {
        '.MuiSlider-rail': { 'height': '2px' },
        '.MuiSlider-track': { 'height': '2px' },
        'display': 'flex',
        'flexDirection': 'column',
        'alignItems': 'center',
        '.MuiSlider-root': { 'width': '70%', 'color': '#00bcd4' },
        '.MuiSlider-thumb': { 'color': '#00bcd4', 'border': '2px solid #00bcd4', 'background-color': 'white' },
        '.MuiSlider-valueLabel': {
            'color': 'white', 'background-color': '#00bcd4', 'border-radius': '6px',
            'padding': '1px 4px', 'font-size': '0.7rem', 'transform': 'translateY(-12px) scale(1)'
        },
    }
}

const SEARCH_TYPE = { RATING: 'rating', YEAR: 'year' };
const RANGE = {
    YEAR: { MIN: 1900, MAX: new Date().getFullYear() },
    RATING: { MIN: 0, MAX: 10 }
};

const SearchFilters = ({ onSearch }) => {
    const [filters, setFilters] = useState({
        title: '',
        yearRange: [1900, new Date().getFullYear()],
        ratingRange: [0, 10]
    });

    const [expanded, setExpanded] = useState('search');

    const handleAccordionChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const handleTitleChange = (searchTerm) => {
        const newFilters = { ...filters, title: searchTerm };
        setFilters(newFilters);
        onSearch(newFilters);
    };

    const handleYearRangeChange = (event, newValue) => {
        const newFilters = { ...filters, yearRange: newValue };
        setFilters(newFilters);
        onSearch(newFilters);
    };

    const handleRatingRangeChange = (event, newValue) => {
        const newFilters = { ...filters, ratingRange: newValue };
        setFilters(newFilters);
        onSearch(newFilters);
    };

    return (
        <div className="search-filters">
            <SearchBar onSearch={handleTitleChange} />

            <Accordion sx={SX_STYLES.FILTER_ACCORDION} className="filter-accordion" expanded={expanded === SEARCH_TYPE.YEAR} onChange={handleAccordionChange('year')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#00bcd4' }} />}>
                    <CalendarTodayIcon sx={SX_STYLES.ACCORDION_ICON} />
                    <Typography>Filter by Year</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Box className="filter-container" sx={SX_STYLES.FILTER_CONTAINER}>
                        <Slider value={filters.yearRange} onChange={handleYearRangeChange}
                            min={RANGE.YEAR.MIN} max={RANGE.YEAR.MAX} valueLabelDisplay="auto" />
                    </Box>
                </AccordionDetails>
            </Accordion>

            <Accordion sx={SX_STYLES.FILTER_ACCORDION} className="filter-accordion" expanded={expanded === SEARCH_TYPE.RATING} onChange={handleAccordionChange('rating')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#00bcd4' }} />}>
                    <StarIcon sx={SX_STYLES.ACCORDION_ICON} />
                    <Typography>Filter by Rating</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Box className="filter-container" sx={SX_STYLES.FILTER_CONTAINER}>
                        <Slider value={filters.ratingRange} onChange={handleRatingRangeChange}
                            min={RANGE.RATING.MIN} max={RANGE.RATING.MAX} step={0.1} valueLabelDisplay="auto" />
                    </Box>
                </AccordionDetails>
            </Accordion>
        </div>
    );
};

export default SearchFilters; 