import { Routes, Route } from "react-router-dom";

// Import Layout and Pages
import RootLayout from "./components/layout/RootLayout";
import AuthLayout from "./components/layout/AuthLayout";
import AppLayout from "./components/layout/AppLayout";
import Home from "./pages/Home";
import Projects from "./pages/app/Projects";
import AddProject from "./pages/app/AddProject";
import Clients from "./pages/app/Clients";
import Settings from "./pages/app/Settings";
import Login from "./pages/auth/Login";

// Import All the CSS
import "./styles/style.scss";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/login" element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="/app" element={<AppLayout />}>
          <Route path="/app" element={<Projects />} />
          <Route path="/app/clients" element={<Clients />} />
          <Route path="/app/settings" element={<Settings />} />
          <Route path="/app/add-project" element={<AddProject />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
