import { NavLink } from 'react-router-dom';

const MainNav = () => {
  return (
    <nav className="app-nav">
      <ul className="list-unstyled">
        <li>
          <NavLink to='/app'>
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to='/app/clients'>
            Clients
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default MainNav;