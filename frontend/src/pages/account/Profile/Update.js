import { useEffect, useState } from "react";
import { Form, Input } from 'antd';
import { MailOutlined, LockOutlined, UserOutlined } from '@ant-design/icons';
// import { useOutletContext } from "react-router-dom";

export default function Update() {
  // const profileData = useOutletContext();
  useEffect(() => {
      document.title = "Update information | OpenKitchen 🧑‍🍳";
  }, [])

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

  const [tempNewPassword, setTempNewPassword] = useState("");

  function handleChange(e) {
    setTempNewPassword(e.target.value);
}

  async function onFinish(values) {
    // const {username, password, email} = values;
    //encrypt user data
    // const encryptedPassword = password;
    //Create new user

    //Update user information

}

    return(
        <div className="update">
        <Form
          name="update_info"
          className="update-form"
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
              Save changes
            </button>
          </Form.Item>
        </Form>
        </div>
    )
}