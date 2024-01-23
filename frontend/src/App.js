import { Outlet, Routes, Route } from 'react-router';
import { Link } from 'react-router-dom';
import { ConfigProvider } from "antd";
import {  useEffect } from 'react';

import CookieConsent from 'react-cookie-consent';

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
import Cohort from './pages/account/Profile/Cohort';
import Payment from './pages/account/Profile/Payment';
import Summary from './pages/account/Profile/Summary';
import Update from './pages/account/Profile/Update';
import Privacy from './pages/privacy';

import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { useNavigate } from 'react-router';

import { AuthProvider } from './contexts/AuthContent';


function Page() {
  return(
    <div>
      <Header />
      <Outlet />
      <CookieConsent 
      disableStyles={true} 
        buttonText="accept"
        declineButtonText="decline"
        containerClasses="cookies-container"
        contentClasses="cookies-content"
        buttonClasses="button"
        enableDeclineButton
        declineButtonClasses='button'
        buttonStyle={{marginBottom: "2.5rem"}}
        flipButtons
        >
          <h2>These are the least tasty cookies on this site.</h2>
          <span>But they <em>are</em> necessary to ensure your experience on OpenKitchen is optimal.
          <br />You can learn more by reading our <Link to="/privacy" className="privacy-link">Privacy policy</Link>.
          </span>
          </CookieConsent>
      <Footer />
    </div>
  )
}

function App() {

  const navigate = useNavigate();

useEffect(() => {

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      //...
      console.log("uid", uid);
    } else {
      // User is signed out
      // ... 
      console.log("user is logged out");

    }
  })
}, [navigate])

  return (
    <AuthProvider>
        <ConfigProvider theme={{
          token: {
            colorPrimary: '#364761',
            colorLink: '#CCA43B',
            colorBgBase: '#E5E5E5',
            colorError: '#CF5C36',
            fontSize: '1em'
          }
        }}>
          <Routes>
            <Route   path="/"           element={<Page />}>

              <Route index  path=""     element={<Home />}/>
              <Route path="menus"       element={<Menus />}/>
              <Route path="about"       element={<About />} />
              <Route path="contact"     element={<Contact />}/>
              <Route path="login"       element={<Login />}/> 
              <Route path="profile"     element={<Profile />}>
                <Route path=""          element={<Summary />}/>
                <Route path="cohort"    element={<Cohort />}/>
                <Route path="payment"   element={<Payment />}/>
                <Route path="update"    element={<Update />}/>
              </Route>
              <Route path="privacy"     element={<Privacy />} />
              <Route path="/*"          element={<NotFound />} />

            </Route>
          </Routes>
        </ConfigProvider> 
    </AuthProvider>
  );
}

export default App;
