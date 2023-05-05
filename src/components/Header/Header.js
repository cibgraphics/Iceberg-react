import HeaderNav from './HeaderNav';

const Header = () => {
  return (
    <header className="app-header">
      <div className="logo">
        <img src="/assets/images/logos/main-logo.svg" />
      </div>
      <HeaderNav />
    </header>
  )
}

export default Header;