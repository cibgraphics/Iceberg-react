import { NavLink } from 'react-router-dom';

const MainNav = () => {
  return (
    <nav className="app-nav">
      <ul className="list-unstyled">
        <li>
          <NavLink to='/'>
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to='/settings'>
            Settings
          </NavLink>
        </li>
        
      </ul>
    </nav>
  )
}

export default MainNav;