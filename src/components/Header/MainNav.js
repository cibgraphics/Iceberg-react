import { NavLink } from 'react-router-dom';
import './MainNav.css';

const MainNav = () => {
  return (
    <nav className="app-nav">
      <ul className="list-unstyled">
        <li>
          <NavLink to='/'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/app'>
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to='/app/settings'>
            Settings
          </NavLink>
        </li>
        <li>
          <NavLink to='/login'>
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default MainNav;