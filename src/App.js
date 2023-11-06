import { Outlet, Routes, Route } from 'react-router';
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
import Login from './pages/Login';

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
    <Routes>
      <Route   path="/"       element={<Page />}>

        <Route path="/"       element={<Home />}/>
        <Route path="menus"   element={<Menus />}/>
        <Route path="about"   element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login"   element={<Login />} /> 
        <Route path="*"       element={<NotFound />} />

      </Route>
    </Routes>
  );
}

export default App;
