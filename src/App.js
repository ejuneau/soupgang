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
      <Route   path="/soupgang/"       element={<Page />}>

        <Route path="/soupgang/"       element={<Home />}/>
        <Route path="/soupgang/menus/"   element={<Menus />}/>
        <Route path="/soupgang/about/"   element={<About />} />
        <Route path="/soupgang/contact/" element={<Contact />} />
        <Route path="/soupgang/login/"   element={<Login />} /> 
        <Route path="/soupgang/*"       element={<NotFound />} />

      </Route>
    </Routes>
  );
}

export default App;
