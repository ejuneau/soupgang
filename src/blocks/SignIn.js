import { useState, useContext } from "react";
import UserContext from "../UserContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import 'antd/dist/antd.css';
import { Form, Input, Button, Checkbox } from 'antd';
import { Link } from "react-router-dom";
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const SignIn = (props) => {
    const { user, login, logout } = useContext(UserContext);

    const navigate = useNavigate();
    const onFinish = values => {
        const {username, password} = values;
        //encrypt user data?
        axios.post('http://localhost:3000/validatePassword', {username,password})
        .then(res => {
            if (res.data.validation) {
              //log the user in
              login({
                id: res.data.user.uuid,
                username: res.data.user.username
              });
              console.log(res.data);
              //redirect to profile page
              navigate("/profile");
                
            } else {
                alert('Your password is not correct. Please try again.');
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
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
    
            <a className="login-form-forgot" href="/">
              Forgot password
            </a>
          </Form.Item>
    
          <Form.Item>
            <button type="primary" htmltype="submit" className="button" style={{marginRight: "1.5em", display:'inline-block'}} >
              Log in
            </button>
            Or <Link to="/login" onClick={()=> props.toggleInUp()}>register now!</Link>
          </Form.Item>
        </Form>
      );
    };

export default SignIn;