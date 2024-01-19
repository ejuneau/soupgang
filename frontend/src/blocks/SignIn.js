import { useNavigate } from "react-router-dom";
import { Form, Input, Checkbox } from 'antd';
import { Link } from "react-router-dom";
import { MailOutlined, LockOutlined } from '@ant-design/icons';

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, signInWithGooglePopup } from "../firebase";

const SignIn = (props) => {
    const navigate = useNavigate();

    const logGoogleUser = async () => {
      const response = await signInWithGooglePopup();
      console.log(response);
    }

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
        <>
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
            <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password" />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="/">Forgot password</a>
          </Form.Item>

          <Form.Item>
            <button type="primary" htmltype="submit" className="button" style={{ marginRight: "1.5em", display: 'inline-block' }}>
              Log in
            </button>
            Or <Link to="/login" onClick={() => props.toggleInUp()}>register now!</Link>
          </Form.Item>
        </Form>

        <span style={{margin: "2.5em"}}>Or</span>
        
        <div className="sso-container">

          <div className="sso google">  
            <button className="login-with-google" onClick={logGoogleUser}>
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" xmlnsXlink="http://www.w3.org/1999/xlink" >
                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
                <path fill="none" d="M0 0h48v48H0z"></path>
              </svg>
              <p >Sign in with Google</p>
            </button>
          </div>

          <div className="sso apple">

          </div>
        </div>

        </>
      );
    };

export default SignIn;