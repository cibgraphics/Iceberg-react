import { NavLink } from 'react-router-dom';

const MainNav = () => {
  return (
    <nav className="app-nav">
      <ul className="list-unstyled">
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
          <NavLink to='/'>
            Logout
          </NavLink>
        </li>
        
      </ul>
    </nav>
  )
}

export default MainNav;