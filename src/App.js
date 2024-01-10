import { Outlet, Routes, Route } from 'react-router';
import { ConfigProvider } from "antd";
import UserContext from './UserContext';
import { useState, useEffect } from 'react';

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

  const [user, setUser] = useState(null);
/*              
login({
  id: res.data.user.uuid,
  username: res.data.user.username
});
*/
  const login = userData => {
    setUser(userData);
    localStorage.setItem('user', true);
    localStorage.setItem('id', userData.id);
    localStorage.setItem('username', userData.username);
  };

  const logout = () => {
    setUser(null);
  }

  useEffect(() => {
    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser) {

      login({
        id: localStorage.getItem('id'),
        username: localStorage.getItem('username')
      });
    }
  }, [])

  return (
    <UserContext.Provider 
    value={{ user, login, logout}}>
        <ConfigProvider theme={{
          token: {
            colorPrimary: '#364761',
            colorLink: '#CCA43B',
            colorBgBase: '#E5E5E5',
            colorError: '#CF5C36'
          }
        }}>
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
        </ConfigProvider> 
    </UserContext.Provider>
  );
}

export default App;
