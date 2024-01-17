import { useNavigate } from "react-router-dom";
import { Form, Input, Checkbox } from 'antd';
import { Link } from "react-router-dom";
import { MailOutlined, LockOutlined } from '@ant-design/icons';

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const SignIn = (props) => {
    const navigate = useNavigate();

    const onFinish = values => {
        const {email, password} = values;
        //encrypt user data
        const encryptedPassword = password;

        signInWithEmailAndPassword(auth, email, encryptedPassword)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate("/profile");
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
        });

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