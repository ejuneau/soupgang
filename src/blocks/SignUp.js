import { Form, Input, Button } from 'antd';
import { Link } from "react-router-dom";
import axios from "axios";
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
const SignUp = (props) => {

    const onFinish = values => {
        const {username, password, email} = values;
        //encrypt user data?
        axios.put('http://localhost:3000/createUser', {username,password,email})
        .then(res => {
            console.log(res.data)
            if (res.status === 200) {
                alert('Account created, welcome to the soup gang!');
                //Log in and redirect
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
            name="password2"
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
            <Button type="primary" htmlType="submit" className="login-form-button" style={{marginRight: "0.5em"}}>
              Sign Up
            </Button>
            Or <Link to="/login" onClick={()=> props.toggleInUp()}>log in</Link>
          </Form.Item>
        </Form>
      );
}
export default SignUp;