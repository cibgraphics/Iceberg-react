import { Routes, Route} from 'react-router-dom';

import AppLayout from './components/layout/AppLayout';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';

function App() {
  return (
    <div className="App">
      <Routes> 
        <Route path='/' element={<AppLayout/>}>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/settings' element={<Settings/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App;
