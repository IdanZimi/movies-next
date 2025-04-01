import TheatersIcon from '@mui/icons-material/Theaters';
import './Header.css';

function Header() {
  return (
    <header className="app-header">
      <div className="logo">
        <TheatersIcon 
          sx={{ 
            fontSize: 40, 
            color: '#004d40',
            filter: 'drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.1))'
          }} 
        />
        <h1 className="logo-text">Next Movies</h1>
      </div>
    </header>
  );
}

export default Header; 