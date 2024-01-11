import { Form, Input } from 'antd';
import { useState, useContext } from "react";
import UserContext from "../UserContext";
import { Link } from "react-router-dom";
import axios from "axios";
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
const SignUp = (props) => {
  const { user, login, logout } = useContext(UserContext);
  const [tempNewPassword, setTempNewPassword] = useState("");

    const onFinish = values => {
        const {username, password, email} = values;
        //encrypt user data
        const encryptedPassword = password;
        //Create new user
        axios.post('http://localhost:3000/createUser', {username,encryptedPassword,email})
        .then(res => {
            if (res.status === 200) {
                alert('Account created, welcome to the soup gang!');
                //Log in and redirect
                login({
                  id: res.data.id,
                });
                //add check for confirmed password
                //add check for duplicate email/username
            } 
        })
    }

    function handleChange(e) {
      setTempNewPassword(e.target.value);
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
            label="Password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="confirm"
            label="Confirm Password"
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
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
            <Input.Password />
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