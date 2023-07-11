import { NavLink } from 'react-router-dom';

const UserNav = () => {
  return (
    <nav className="user-nav">
      <ul className="list-unstyled">
        <li>
          <NavLink to="/login" className="button ghost">
            <div className="button-icon">
              <i className="icon-logout"></i>
            </div>
            Logout
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default UserNav;