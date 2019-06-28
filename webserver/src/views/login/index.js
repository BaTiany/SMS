import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd'
import { LoginWrap } from './style'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import * as actions from './store/actionCreates';


class Login extends Component {

  handleSubmit = (e) => {
    // 阻止 submit 的默认行为
    e.preventDefault();
    // 表单校验
    this.props.form.validateFields((err, values) => {
      if (!err) {
        // 校验成功，没问题
        console.log('Received values of form: ', values);

        this.props.handleSignIn(values);
      }
    });
  };

  render() {
    let { getFieldDecorator } = this.props.form;
    return (
      <LoginWrap>
        <Form onSubmit={this.handleSubmit}>
          <Form.Item>
            {getFieldDecorator('email', {
              rules: [
                { required: true, message: 'Please input your email!' },]
            })(<Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="email" placeholder="用户邮箱" />)}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [
                { required: true, message: 'Please input your password!' },
                { min: 3, message: 'Three figures minimum!' }
              ]
            })(<Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password" placeholder="用户密码" />)}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(<Checkbox>Remember me</Checkbox>)}
            <a className="login-form-forgot" href="#">
              Forgot password
           </a>
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit">登录</Button>
          </Form.Item>
          Or <NavLink to="/sign">register now!</NavLink>
        </Form>
      </LoginWrap>
    );
  }
}
const LoginUI = Form.create({})(Login);

export default connect(
  null,
  (dispatch, props) => ({
    handleSignIn(values) {
      dispatch(actions.asyncSignIn(values, props));
    }
  })
)(LoginUI);


