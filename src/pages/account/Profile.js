import { useNavigate } from "react-router";
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';

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
    const [email, setEmail] = useState("");
    const [tempNewPassword, setTempNewPassword] = useState("");
    
    function handleChange(e) {
        setTempNewPassword(e.target.value);
    }

    const onFinish = values => {
        const {username, password, email} = values;
        //update user data
        axios.put(`http://localhost:3000/profiles/${username}`, {username, password, email})
        .then(res => {
            if (res.data.validation) {
              //send confirmation
              navigate("/profile");
                
            } else {
                alert('Something went wrong. Please try again.');
            }
        })
    }
    
    useEffect(() => {
        if (user === null) {
            navigate("/login");
        } else {
            console.log(`retrieving info for user ${user.username}...`)
            axios.get(`http://localhost:3000/profiles/${user.username}`).then(res => {
                if (res.data) {
                    console.log(res.data);
                    setUsername(res.data.username);
                    setPassword(res.data.password);
                    setEmail(res.data.email);
                }
            })
        }
    }, [user])


    
    if (user){
        return(<div className="page">
            <div className="splash">
                <h1>Howdy, {user.firstName || user.username}!</h1>
                <div className="button-container">
                    <button onClick={logout} className="button">Logout</button>
                </div>            </div>
            <div className="profile-container">
                <h1>Your Profile</h1>
                <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="email"
          >
            <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder={email} />
          </Form.Item>
          <Form.Item
            name="username"
            rules={[
              {
                required: false,
                message: 'Please input your Username!',
              },
            ]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder={username} />
          </Form.Item>
          <Form.Item
            name="password"
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="(unchanged)"
              onChange={e => handleChange(e)}
            />
          </Form.Item>
{          tempNewPassword && <Form.Item
            name="password-2"
            rules={[
              {
                required: true,
                message: 'Please confirm your Password!',
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Confirm new password"
            />
          </Form.Item>}
    
          <Form.Item>
            <button type="primary" htmltype="submit" className="button" style={{marginRight: "1.5em", display:'inline-block'}} >
              save changes
            </button>
          </Form.Item>
          
        </Form>
            </div>
        </div>)
        } else {
            navigate("/login");
        }
        
    }

export default Profile;