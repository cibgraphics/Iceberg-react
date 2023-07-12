import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import firebase from './../firebase';

const withAuthentication = (WrappedComponent) => {
  const WithAuthentication = (props) => {
    const navigate = useNavigate();

    useEffect(() => {
      const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
        if (!user) {
          // User is not logged in, redirect to the login page
          navigate('/login');
        }
      });

      return () => unsubscribe();
    }, [navigate]);

    return <WrappedComponent {...props} />;
  };

  return WithAuthentication;
};

export default withAuthentication;