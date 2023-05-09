import { Routes, Route} from 'react-router-dom';

import RootLayout from './components/layout/RootLayout';
import AppLayout from './components/layout/AppLayout';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';

function App() {
  return (
    <div className="App">
      <Routes> 
        <Route path='/' element={<RootLayout/>}>
          <Route path='/' element={<Home/>}/>
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
