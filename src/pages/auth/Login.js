import firebase from './../../firebase';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then(() => {
        // Login successful
        // Perform any additional actions after login if needed
        navigate('/app'); // Navigate to app page after successful login
      })
      .catch((error) => {
        // Handle login error
        const errorCode = error.code;
        const errorMessage = error.message;
        // Display error to the user or handle it accordingly
      });
  };

  return (
    <div className="container">
      <div className="content text-center">
        <button className="button" onClick={handleLogin}>Login with Google</button>
      </div>
    </div>
  );
}

export default Login;