import { Outlet, useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import React, {useCallback, useEffect, useState} from 'react';
import { useAuth } from "../../contexts/AuthContent";

import { signOut } from "firebase/auth";
import { auth, db } from "../../firebase";

import { doc, getDoc } from "firebase/firestore";

function Profile() {

  useEffect(() => {
    document.title = "Profile | OpenKitchen 🧑‍🍳";
  }, [])

    const navigate = useNavigate();
    const [profileData, setProfileData] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const handleLogout = () => {
      signOut(auth).then(() => {
        //Sign-out successful
        navigate("/");
        console.log("signed out successfully");
      }).catch((error) => {
        //An error happened.
        throw(error);
      })
    }
    
    const currentUser = useAuth().currentUser;

    useEffect(() => {
      if (currentUser === null) {
        navigate("/login");
      }
    }, [navigate, currentUser]);

    const getProfileData = useCallback(async()  => {

      if (currentUser.currentUser === null) { return }
      const docRef = doc(db, "users", currentUser.uid);
      try {
        const docSnap = await getDoc(docRef);
        if(docSnap.exists()) {
          setProfileData(docSnap.data());
          // console.log("Retrieved profile data");
          setIsLoading(false);
        } else {
          console.log(`User with uid ${currentUser.uid} does not exist`)
        }
      } catch (error) {
      console.log(error);
      }
    }, [currentUser.currentUser, currentUser.uid]);

    //Get profile data
    useEffect(() => {
      getProfileData();
    }, [getProfileData])

    useEffect(() => {
      if (profileData.first_name) {
        document.title = `${profileData.first_name}'s Profile | OpenKitchen 🧑‍🍳`;
      } else if (profileData.username) {
        document.title = `${profileData.username}'s Profile | OpenKitchen 🧑‍🍳`;
      } else {
        document.title = "Profile | OpenKitchen 🧑‍🍳";
      }
    }, [profileData.first_name, profileData.username])

      if (!isLoading) {return (
        <div className="page">
          <div className="splash">
            <h1>Howdy{profileData.first_name?`, ${profileData.first_name}`:``}!</h1>
         
          </div>
          <div className="profile-navbar">
            <NavLink to="/profile/"           end    className={({isActive}) => isActive ? "profile-navbar-first active" : "profile-navbar-first"}>Summary</NavLink>
            <NavLink to="/profile/cohort/"    end    className={({isActive}) => isActive ? "profile-navbar active" : "profile-navbar"}>Cohort</NavLink>
            <NavLink to="/profile/payment/"   end    className={({isActive}) => isActive ? "profile-navbar active" : "profile-navbar"}>Payment & Billing</NavLink>
            <NavLink to="/"                   end    className={({isActive}) => isActive ? "profile-navbar-last active" : "profile-navbar-last"} onClick={handleLogout} >Logout</NavLink>
          </div>
          <div className="profile-container">
            <div className="profile-sidebar">
              <h2 style={{marginTop: 0}}>Account info:</h2>
              <NavLink to="/profile/update/" style={{color: "#CCA43B", textDecoration: "none"}}>Update information</NavLink>
              <h3>Name: </h3> <p>{profileData.first_name || "not set"} {profileData.last_name || ""}</p>
              <h3>Username: </h3><p> {profileData.username || "not set"}</p>
              <h3>Password: </h3><p> ********</p>
              <h3>Address: </h3><p>{profileData.addres || "not set"}</p>
              <h3>Can cook?</h3><p>{profileData.is_cook?"Yes":"No"}</p>
            </div>
            <div className="profile-content">
              <Outlet context={[profileData, isLoading]} />
            </div>
          </div>
        </div>
      )} else { return (
<div className="page">
          <div className="splash">
            <h1>Loading...</h1>
         
          </div>
          <div className="profile-navbar">
            <NavLink to="/profile/"           end    className={({isActive}) => isActive ? "profile-navbar-first active" : "profile-navbar-first"}>Summary</NavLink>
            <NavLink to="/profile/cohort/"    end    className={({isActive}) => isActive ? "profile-navbar active" : "profile-navbar"}>Cohort</NavLink>
            <NavLink to="/profile/payment/"   end    className={({isActive}) => isActive ? "profile-navbar active" : "profile-navbar"}>Payment & Billing</NavLink>
            <NavLink to="/"                   end    className={({isActive}) => isActive ? "profile-navbar-last active" : "profile-navbar-last"} onClick={handleLogout} >Logout</NavLink>
          </div>
          <div className="profile-container">
            <div className="profile-sidebar">
              <h2>Account info:</h2>
              <NavLink to="/account" style={{color: "#CCA43B", textDecoration: "none"}}>Update information</NavLink>
              <h3>Name: </h3> <p>loading...</p>
              <h3>Username: </h3><p>loading...</p>
              <h3>Password: </h3><p> ********</p>
              <h3>Address: </h3><p>loading...</p>
              <h3>Can cook?</h3><p>lading...</p>
            </div>
            <div className="profile-content">
              <Outlet context={[profileData, setProfileData, isLoading, setIsLoading]}/>
            </div>
          </div>
        </div>
      )}
        }
        


export default Profile;