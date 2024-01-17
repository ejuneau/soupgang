import { Form, Input } from 'antd';
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import { setDoc, doc } from "firebase/firestore";
import { db } from '../firebase';




import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';


const SignUp = (props) => {

  const navigate = useNavigate();

  const [tempNewPassword, setTempNewPassword] = useState("");

  async function createFirestoreEntry(user, username, email) {
    try {
      await setDoc(doc(db, "users", user.uid), {
        email: email,
        username: username,
      })
    } catch (error) {
      throw (error)
    }
  }

  const validateEmail = (rule, value, callback) => {
    const emailRegex = /^[A-Za-z0-9+_.-]+@(.+)$/;
    if (!emailRegex.test(value)) {
      callback('Invalid Email address');
    } else if (value==="") {
      callback();
    } else {
      callback();
    }
  };

    async function onFinish(values) {
        const {username, password, email} = values;
        //encrypt user data
        const encryptedPassword = password;
        //Create new user

        await createUserWithEmailAndPassword(auth, email, encryptedPassword)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          //Add user data to Firestore
          createFirestoreEntry(user, username, email);
          navigate("/profile");
          //...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
          //...
        });

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
              { required: true, message: 'Please input your Email!' },
              { validator: validateEmail }
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
                message: 'Please input your password!',
              },
            ]}
            hasFeedback
          >
            <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} onChange={e => handleChange(e)} placeholder="Password"/>
          </Form.Item>

          {tempNewPassword &&
            <Form.Item
            name="confirm"
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
            <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Confirm password"/>
          </Form.Item>}
          <Form.Item>
          <button type="primary" htmltype="submit" className="button" style={{marginRight: "1.5em", display:'inline-block'}} >
              Sign Up
            </button>
            Or <Link to="/login" onClick={()=> props.toggleInUp()}>log in</Link>
          </Form.Item>
        </Form>
      );
}
export default SignUp;