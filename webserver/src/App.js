import React, { Component } from 'react';
import Loadable from 'react-loadable';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Spin, Alert } from 'antd';


// import Login from '@/views/login';
// import Sign from '@/views/sign';
// import Home from '@/views/home';


/**
 * @package 路由懒加载
 */
const Login = Loadable({
  // 需要异步加载的组件
  loader: () => import('./views/login'),
  // 加载中的提示组件
  loading: () => <Spin tip="Loading...">
    <Alert
      message="Alert message title"
      description="Further details about the context of this alert."
      type="info"
      size="large"
    />
  </Spin>
});

const Sign = Loadable({
  // 需要异步加载的组件
  loader: () => import('./views/sign'),
  // 加载中的提示组件
  loading: () => <Spin tip="Loading...">
    <Alert
      message="Alert message title"
      description="Further details about the context of this alert."
      type="info"
      size="large"
    />
  </Spin>
});

const Home = Loadable({
  // 需要异步加载的组件
  loader: () => import('./views/home'),
  // 加载中的提示组件
  loading: () => <Spin tip="Loading...">
    <Alert
      message="Alert message title"
      description="Further details about the context of this alert."
      type="info"
      size="large"
    />
  </Spin>
});

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/sign" component={Sign} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    );
  }
}
