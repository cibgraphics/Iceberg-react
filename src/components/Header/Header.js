import MainNav from './MainNav';
import './Header.css';

const Header = () => {
  return (
    <header className="app-header">
      <div className="logo">
        <img src="/assets/images/logos/main-logo.svg" alt="Iceberg" />
      </div>
      <MainNav />
    </header>
  )
}

export default Header;