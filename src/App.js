import { Routes, Route, Outlet } from 'react-router-dom';
import AuthChecker from './components/AuthChecker';
import RootLayout from "./components/layout/RootLayout";
import AuthLayout from "./components/layout/AuthLayout";
import AppLayout from "./components/layout/AppLayout";
import Home from "./pages/Home";
import Projects from "./pages/app/Projects";
import Project from "./pages/app/Project";
import AddProject from "./pages/app/AddProject";
import Clients from "./pages/app/Clients";
import AddClient from "./pages/app/AddClient";
import Settings from "./pages/app/Settings";
import Login from "./pages/auth/Login";

// Import All the CSS
import "./styles/style.scss";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login/*" element={<AuthLayout />}>
          <Route index element={<Login />} />
        </Route>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="app/*" element={<AppLayout />}>
          <Route index element={<Projects />} />
          <Route path="project" element={<Project />} />
          <Route path="clients" element={<Clients />} />
          <Route path="clients/add" element={<AddClient />} />
          <Route path="settings" element={<Settings />} />
          <Route path="add-project" element={<AddProject />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;