import React, { Component } from 'react';
import { Switch, Route, NavLink, Redirect } from 'react-router-dom';
import { Layout, Menu, Icon, Button } from 'antd';
import { HomeWrap, SiderWrap, HeaderWrap, ContentWrap, Logo } from './style'


export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collapsed: false,
    };
  }
  toggle = () => {
    this.setState(prevState => ({
      collapsed: !prevState.collapsed,
    }));
  };

  render() {
    return (
      <HomeWrap>
        <Layout>
          <SiderWrap collapsed={this.state.collapsed}>
            <Logo />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item key="1">
                <NavLink to="/student">学生管理</NavLink>
              </Menu.Item>
              <Menu.Item key="2">
                <NavLink to="/teacher">教师管理</NavLink>
              </Menu.Item>
            </Menu>

          </SiderWrap>
          <Layout>
            <HeaderWrap>
              <Icon
                className="trigger"
                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.toggle}
              />

              <Button>退出登录</Button>
            </HeaderWrap>
            <ContentWrap>
              <Route path="/student" render={() => <h1>学生</h1>}></Route>
              <Route path="/teacher" render={() => <h1>老师</h1>}></Route>
              <Redirect to="/student"></Redirect>
            </ContentWrap>
          </Layout>
        </Layout>
      </HomeWrap>
    );
  }
}

// import { Layout, Menu, Icon } from 'antd';

// const { Header, Sider, Content } = Layout;

// class SiderDemo extends React.Component {
//   state = {
//     collapsed: false,
//   };

//   toggle = () => {
//     this.setState({
//       collapsed: !this.state.collapsed,
//     });
//   };

//   render() {
//     return (
//       <Layout>
//         <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
//           <div className="logo" />
//           <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
//             <Menu.Item key="1">
//               <Icon type="user" />
//               <span>nav 1</span>
//             </Menu.Item>
//             <Menu.Item key="2">
//               <Icon type="video-camera" />
//               <span>nav 2</span>
//             </Menu.Item>
//             <Menu.Item key="3">
//               <Icon type="upload" />
//               <span>nav 3</span>
//             </Menu.Item>
//           </Menu>
//         </Sider>
//         <Layout>
//           <Header style={{ background: '#fff', padding: 0 }}>
//             <Icon
//               className="trigger"
//               type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
//               onClick={this.toggle}
//             />
//           </Header>
//           <Content
//             style={{
//               margin: '24px 16px',
//               padding: 24,
//               background: '#fff',
//               minHeight: 280,
//             }}
//           >
//             Content
//           </Content>
//         </Layout>
//       </Layout>
//     );
//   }
// }

// ReactDOM.render(<SiderDemo />, mountNode);
