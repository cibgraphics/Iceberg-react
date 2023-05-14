import {Link} from 'react-router-dom';
import Header from './components/Header/Header';

import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyDE38uy_h3mtmr3tx5__l_sfH3kgvogrHE",
  authDomain: "iceberg-2f78e.firebaseapp.com",
  projectId: "iceberg-2f78e",
  storageBucket: "iceberg-2f78e.appspot.com",
  messagingSenderId: "507528991944",
  appId: "1:507528991944:web:ef132584f57602d29f41fd",
  measurementId: "G-SE1V0ZKYNG"
};




function App() {
  return (
    <div className="App">
      <Header />
      <div id="firebaseui-auth-container"></div>
      <div id="loader"></div>
      <div>Logout</div>
    </div>
  );
}

export default App;
