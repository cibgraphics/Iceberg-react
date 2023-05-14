import { Routes, Route} from 'react-router-dom';
import { initializeApp } from "firebase/app";

import RootLayout from './components/layout/RootLayout';
import AuthLayout from './components/layout/AuthLayout';
import AppLayout from './components/layout/AppLayout';
import Home from './pages/Home';
import Dashboard from './pages/app/Dashboard';
import Settings from './pages/app/Settings';
import Login from './pages/auth/Login';

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
      <Routes> 
        <Route path='/' element={<RootLayout/>}>
          <Route path='/' element={<Home/>}/>
        </Route>
        <Route path='/login' element={<AuthLayout/>}>
          <Route path='/login' element={<Login/>}/>
        </Route>
        <Route path='/app' element={<AppLayout/>}>
          <Route path='/app' element={<Dashboard/>}/>
          <Route path='/app/settings' element={<Settings/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App;




import {Link} from 'react-router-dom';
import Header from './components/Header/Header';




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
      
      <div>Logout</div>
    </div>
  );
}

export default App;
