import { Outlet, Routes, Route } from 'react-router';
import { AuthProvider } from './backend/AuthProvider';
import './App.css';
import './blocks/blocks.css';
import './pages/pages.css';

import Header from './blocks/Header';
import Footer from './blocks/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Menus from './pages/Menus';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Login from './pages/account/Login';
import Profile from './pages/account/Profile';
import Privacy from './pages/privacy';

function Page() {
  return(
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

function App() {

  return (
    <AuthProvider>
      <Routes>
        <Route   path="/"       element={<Page />}>

          <Route path="/"         element={<Home />}/>
          <Route path="/menus/"   element={<Menus />}/>
          <Route path="/about/"   element={<About />} />
          <Route path="/contact/" element={<Contact />} />
          <Route path="/login/"   element={<Login />} /> 
          <Route path="/profile/" element={<Profile />} />
          <Route path="/privacy/" element={<Privacy />} />
          <Route path="/*"        element={<NotFound />} />

        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
