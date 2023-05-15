import { NavLink } from 'react-router-dom';

const UserNav = () => {
  return (
    <nav className="user-nav">
      <ul className="list-unstyled">
        <li>
          <NavLink to='/login'>
            Logout
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default UserNav;