import firebase from './../../firebase';
import { NavLink } from 'react-router-dom';

const UserNav = ({ isLoggedIn }) => { // Receive isLoggedIn prop
  const handleLogout = (e) => {
    e.preventDefault();
    firebase.auth().signOut()
      .then(() => {
        // Logout successful
        // Perform any additional actions after logout if needed
      })
      .catch((error) => {
        // Handle logout error
        const errorCode = error.code;
        const errorMessage = error.message;
        // Display error to the user or handle it accordingly
      });
  };

  return (
    <nav className="user-nav">
      <ul className="list-unstyled">
        <li>
          {isLoggedIn ? (
            <a href="#0" onClick={handleLogout} className="button ghost">
              <div className="button-icon">
                <i className="icon-logout"></i>
              </div>
              Logout
            </a>
          ) : (
            <NavLink to="/login" className="button ghost">Login</NavLink>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default UserNav;