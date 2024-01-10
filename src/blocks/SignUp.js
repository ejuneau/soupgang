import { Form, Input, Button } from 'antd';
import { useState, useContext } from "react";
import UserContext from "../UserContext";
import { Link } from "react-router-dom";
import axios from "axios";
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
const SignUp = (props) => {
  const { user, login, logout } = useContext(UserContext);
    const onFinish = values => {
        const {username, password, email} = values;
        //encrypt user data
        const encryptedPassword = password;
        //Create new user
        axios.post('http://localhost:3000/createUser', {username,encryptedPassword,email})
        .then(res => {
            console.log(res.data)
            if (res.status === 200) {
                alert('Account created, welcome to the soup gang!');
                //Log in and redirect
                login({
                  id: res.data.user.uuid,
                  username: res.data.user.username
                });
                //add check for confirmed password
                //add check for duplicate email/username
            } 
        })
    }

    return (
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
            rules={[
              {
                required: true,
                message: 'Please input your Email!',
              },
            ]}
          >
            <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your Username!',
              },
            ]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item
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
              placeholder="Confirm Password"
            />
          </Form.Item>
    
          <Form.Item>
          <button type="primary" htmlType="submit" className="button" style={{marginRight: "1.5em", display:'inline-block'}} >
              Sign Up
            </button>
            Or <Link to="/login" onClick={()=> props.toggleInUp()}>log in</Link>
          </Form.Item>
        </Form>
      );
}
export default SignUp;