import { useNavigate } from "react-router";
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined, SmileOutlined, HomeOutlined } from '@ant-design/icons';

import { useState } from 'react'
import React, {useContext} from 'react';
import UserContext from "../../UserContext";
import { useEffect } from "react";
import axios from "axios";
function Profile() {

    const { user, logout } = useContext(UserContext);
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [tempNewPassword, setTempNewPassword] = useState("");
    const [email, setEmail] = useState("");
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [address, setAddress] = useState("");
    
    function  handleUsernameChange(e) {
      setUsername(e.target.value);
      console.log(username);
    }
    function  handlePasswordChange(e) {
      setTempNewPassword(e.target.value);
      console.log(tempNewPassword)
    }
    function  handleEmailChange(e) {
      setEmail(e.target.value);
      console.log(email);
    }
    function  handleFirstNameChange(e) {
      setFirstName(e.target.value);
      console.log(first_name);
    }
    function  handleLastNameChange(e) {
      setLastName(e.target.value);
      console.log(last_name);
    }
    function  handleAddressChange(e) {
      setAddress(e.target.value);
      console.log(address);
    }

    const onFinish = values => {
        // const {username, password, email, first_name, last_name, address} = values;
        //update user data
        const id = localStorage.getItem('id');
        axios.put(`http://localhost:3000/profiles/${id}`, {username, tempNewPassword, email, first_name, last_name, address})
        .then(res => {
            if (res.status === 200) {
              //send confirmation
              navigate("/profile");
                
            } else {
                alert('Something went wrong. Please try again.');
            }
        })
    }
    
    useEffect(() => {
        if (!user) {
            navigate("/login");
        } else {
            const id = localStorage.getItem('id');
            console.log()
            axios.get(`http://localhost:3000/profiles/${id}`).then(res => {
                if (res.data) {
                    setUsername(res.data.username);
                    setPassword(res.data.password);
                    setEmail(res.data.email);
                    setFirstName(res.data.first_name);
                    setLastName(res.data.last_name);
                    setAddress(res.data.address);
                }
            })
        }
    }, [])


    
    if (user){
      return(
        <div className="page">
          <div className="splash">
            <h1>Howdy, {first_name || username}!</h1>
            <div className="button-container">
              <button onClick={logout} className="button">Logout</button>
            </div>            
          </div>
          <div className="profile-container">
            <Form
              name="update-info"
              initialValues={{ remember: true }}
              onFinish={onFinish}
            >
              <h1>Account Info</h1>
              <p>Email:</p>
              <Form.Item name="email" >
                <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder={email?email:"Loading..."} onChange={e => handleEmailChange(e)}/>
              </Form.Item>
              <p>We only use your email address for updates regarding your cohort and payments. We never send promotional emails or newsletters, promise!</p>
              <p>Username:</p>
              <Form.Item name="username" >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder={username?username:"Loading..."}  onChange={e => handleUsernameChange(e)}/>
              </Form.Item>
              <p>Password:</p>
              <Form.Item name="password" >
                <Input.Password
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="(unchanged)"
                  onChange={e => handlePasswordChange(e)}
                />
              </Form.Item>
              <Form.Item
                name="confirm"
                style={{
                  overflow: 'hidden',
                  height: tempNewPassword?'auto':'0px',
                  transition: "all 0.2s ease-in-out"
                }}
                dependencies={['password']}
                
                rules={[
                  {
                    required: tempNewPassword?true:false,
                    message: 'Please confirm your password!',
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error('The new password that you entered do not match!'));
                    },
                  }),
                ]}
              >
                <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Confirm new password"/>
              </Form.Item>
              <h1>Personal Info</h1>
              <p>This information is private, and is only shared with your cohort.</p>
              <p>First name:</p>
              <Form.Item name="first_name" >
                <Input prefix={<SmileOutlined className="site-form-item-icon" />} placeholder={first_name?first_name:"First name (optional)"} onChange={(e) => {handleFirstNameChange(e)}}/>
              </Form.Item>
              <p>Last name:</p>
              <Form.Item name="last_name" >
                <Input prefix={<SmileOutlined className="site-form-item-icon" />} placeholder={last_name?last_name:"Last name (optional)"} onChange={(e) => {handleLastNameChange(e)}}/>
              </Form.Item>
              <p>Address:</p>
              <Form.Item name="address" >
                <Input prefix={<HomeOutlined className="site-form-item-icon" />} placeholder={address?address:"Address (required to join a cohort)"} onChange={(e) => {handleAddressChange(e)}}/>
              </Form.Item>
              <Form.Item>
                <button type="primary" htmltype="submit" className="button" style={{marginRight: "1.5em", display:'inline-block'}} >
                  save all changes
                </button>
              </Form.Item>
            </Form>
          </div>
        </div>)
        }
        
    }

export default Profile;