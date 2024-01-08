import { useState } from "react";
import axios from "axios";
// import 'antd/dist/antd.css';
import { Form, Input, Button, Checkbox } from 'antd';
import { Link } from "react-router-dom";
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const SignIn = (props) => {

    const onFinish = values => {
        const {username, password} = values;
        //encrypt user data?
        axios.post('http://localhost:3000/validatePassword', {username,password})
        .then(res => {
            if (res.data.validation) {
                alert('Your password is correct, thank you!');
                //log in and redirect
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
            <Button type="primary" htmlType="submit" className="login-form-button" style={{marginRight: "0.5em"}}>
              Log in
            </Button>
            Or <Link to="/login" onClick={()=> props.toggleInUp()}>register now!</Link>
          </Form.Item>
        </Form>
      );
    };

export default SignIn;