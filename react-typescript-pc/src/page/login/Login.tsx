import React from 'react';
import { useHistory, RouterProps } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { showLoading, hideLoading } from '@/store/action';
import { Form, Input, Button, Checkbox } from 'antd';
import util from '@/utils/util';
import LoginStyle from './login.module.scss';

interface IProps extends RouterProps {}

type fromValue = {
  password: string;
  remember: boolean;
  username: string;
};
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 }
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 }
};

const Login: React.FC<IProps> = (props: IProps) => {
  console.log(props);
  // hook history
  const history = useHistory();
  // hook dispatch
  const dispatch = useDispatch();
  const onFinish = (values: fromValue) => {
    dispatch(showLoading());
    setTimeout(() => {
      util.setToken(values.username + values.password);
      history.push({
        pathname: `/menuHome/a/a`
      });
      dispatch(hideLoading());
    }, 800);
    // props.history.push({
    //   pathname: `/equipmentPage`
    // });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div
      className={`root-router-page ${LoginStyle.loginPage}`}
      style={{
        backgroundImage: 'url("https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg")',
        height: '100vh'
      }}
    >
      <div className={LoginStyle.centerWrap}>
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          {/* 用户名 */}
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>
          {/* 密码 */}
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>
          {/* rember */}
          <Form.Item {...tailLayout} name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          {/* submit */}
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
