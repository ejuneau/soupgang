import { useEffect, useState, useRef, useCallback } from "react";
import { Form, Input, Checkbox, message } from 'antd';
import { MailOutlined, LockOutlined, UserOutlined, HomeOutlined } from '@ant-design/icons';
import { useOutletContext } from "react-router-dom";
import { usePlacesWidget } from "react-google-autocomplete";
import { useAuth } from "../../../contexts/AuthContent";
import { db } from "../../../firebase";
import { doc, updateDoc } from "firebase/firestore";
export default function Update() {
  const [profileData, isLoading] = useOutletContext();
  useEffect(() => {
      document.title = "Update information | OpenKitchen 🧑‍🍳";
  }, [])
  const [messageApi, contextHolder] = message.useMessage();

  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Information successfully updated!'
    });
  }
  const error = (error) => {
    messageApi.open({
      type: 'error',
      content: `Something went wrong: ${error}`
    })
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
  const inputRef = useRef(null);
  const { ref: antRef } = usePlacesWidget({
    apiKey: process.env.REACT_APP_GOOGLE_MAPS_API,
    options: {
      types: ['address']
    },
    onPlaceSelected: (place) => {
      //@ts-ignore
      inputRef.current.input.value = place?.formatted_address;
    },
  });

  const [tempNewPassword, setTempNewPassword] = useState("");
  const [tempNewAddress, setTempNewAddress] = useState("");

  function handleChange(e) {
    setTempNewPassword(e.target.value);
}

  function handleAddressChange(e) {
    setTempNewAddress(e.target.value);
  }

  async function onFinish(values) {
      setProfileData(values)
      // setProfileData does not update password
      // Find a way to do this natively in firebase?
}
const currentUser = useAuth().currentUser;

const setProfileData = useCallback(async(values)  => {
  const {first_name, last_name, address, email, username, is_cook} = values;
  if (currentUser.currentUser === null) { return }
  const docRef = doc(db, "users", currentUser.uid);
  var updateObject = {}
  //check if values are non-empty
  if (first_name) updateObject.first_name = first_name;
  if (last_name)  updateObject.last_name  = last_name;
  if (username)   updateObject.username   = username;
  if (address)    updateObject.address    = address;
  if (email)      updateObject.email      = email;
  // is_cook is a boolean and should get updated regardless of its value
                  updateObject.is_cook    = is_cook;
  try {
    await updateDoc(docRef, updateObject)
    .then((doc) => {
      success();
      setTimeout(() => {window.location.reload()}, 1000);
    });
  } catch (error) {
    error(error);
  }
}, [currentUser.currentUser, currentUser.uid]);

    return(
        <div className="update">
          {contextHolder}
        { isLoading? <h1>loading...</h1>: <Form
          name="update_info"
          className="update-form"
          initialValues={{
            first_name: profileData.first_name,
            last_name: profileData.last_name,
            username: profileData.username,
            email: profileData.email,
            address: profileData.address,
            is_cook: profileData.is_cook
          }}
          style={{marginTop: '5em'}}
          onFinish={onFinish}
        >


                <Form.Item
                  name="first_name"
                  rules={[{ required: false }]}
                  style={{display: 'inline-block', width: '50%'}}
                >
                  <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="First Name" />
                </Form.Item>
                <Form.Item
                  name="last_name"
                  rules={[{ required: false }]}
                  style={{display: 'inline-block', width: '50%'}}

                >
                  <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="Last Name" />
                </Form.Item>

  

          <Form.Item
            name="email"
            rules={[
              { required: false, message: 'Please input your Email!' },
              { validator: validateEmail }
            ]}
          >
            <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email" />
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
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: false,
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
          <Form.Item
            name="address"
            rules={[{required: false}]}>
              <Input prefix={<HomeOutlined className="site-form-item-icon" />} onChange={(e) => handleAddressChange(e)} placeholder="Address" ref={(c) => {
                inputRef.current = c;
                if (c) antRef.current = c.input;
              }}
              />
          </Form.Item>
          {tempNewAddress &&
            <Form.Item
            name="address_line_2"
            dependencies={['address']}
            hasFeedback
            rules={[
              {
                required: false,
              },
            ]}
          >
            <Input prefix={<HomeOutlined className="site-form-item-icon" />} placeholder="Address Line 2 (optional)"/>
          </Form.Item>}

          <Form.Item>
            <Form.Item name="is_cook" valuePropName="checked" noStyle>
              <Checkbox>is_cook?</Checkbox>
            </Form.Item>
          </Form.Item>

          <Form.Item>
          <button type="primary" htmltype="submit" className="button" style={{marginRight: "1.5em", display:'inline-block'}} >
              Save changes
            </button>

          </Form.Item>

        </Form>}
        <button className="button delete-account" style={{marginRight: "1.5em", display: 'inline-block'}} >close account</button>

        </div>
    )
}