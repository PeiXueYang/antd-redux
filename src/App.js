import React,{Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import routes from "./router/router.js";
import './App.css'
import { Layout, Menu,Icon } from 'antd';
const { Header, Content,Sider } = Layout;
const SubMenu = Menu.SubMenu;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      collapsed: false,
    };
  }
  onCollapse = collapsed => {
    // this.setState({ collapsed });
  };
  render() {
    return (
      // 导航部分
       <div className='app'>
        <Router>
            <Layout className="layout">
              <Header >
                <div className="logo" />
                <Menu
                  theme="dark"
                  mode="horizontal"
                  defaultSelectedKeys={['2']}
                  style={{ lineHeight: '64px' }}
                >
                  <Menu.Item key="1"> <Link to='/'>首页</Link></Menu.Item>
                  <Menu.Item key="2"><Link to='/user'>用户</Link></Menu.Item>
                  <Menu.Item key="3"><Link to='/shop'>商户</Link></Menu.Item>
                  <div className='login-header' ><Link to='/shop' >admin</Link></div>
                </Menu>
              </Header>
              <Content className='content-layout'>
              <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                  <Menu.Item key="1">
                    <Icon type="pie-chart" />
                    <span>Option 1</span>
                  </Menu.Item>
                  <Menu.Item key="2">
                    <Icon type="desktop" />
                    <span>Option 5</span>
                  </Menu.Item>
                  <SubMenu
                    key="sub1"
                    title={
                      <span>
                        <Icon type="user" />
                        <span><Link to='/user' className='reset'>用户管理</Link></span>
                      </span>
                    }
                  >
                    <Menu.Item key="3">  <Link to='/user/userlist'>用户列表</Link></Menu.Item>
                    <Menu.Item key="4"> <Link to='/user/adduser'>添加用户</Link></Menu.Item>
                    <Menu.Item key="5"> <Link to='/user/edituser'>编辑用户</Link></Menu.Item>
                  </SubMenu>
                  <SubMenu
                    key="sub2"
                    title={
                      <span>
                        <Icon type="team" />
                        <span> <Link to='/shop'  className='reset'>商户</Link></span>
                      </span>
                    }
                  >
                    <Menu.Item key="6"><Link to='/shop/shoplist'>商户列表</Link></Menu.Item>
                    <Menu.Item key="7"><Link to='/shop/addshop'>添加商户</Link></Menu.Item>
                    <Menu.Item key="8"><Link to='/shop/editshop'>编辑商户</Link></Menu.Item>
                  </SubMenu>
                 
                </Menu>
              </Sider>
              <div className='component-box'>
                {
                  routes.map((route,index)=>{
                    // 如果指定了 首页
                    if(route.exact){

                      return <Route key={index} path={route.path}
                      render={props => (
                        // pass the sub-routes down to keep nesting
                        <route.component {...props} routes={route.routes} />
                      )}  exact={route.exact}/>

                    }
                    // 否则
                    else{

                      return <Route key={index} path={route.path}  render={props => (
                        // pass the sub-routes down to keep nesting
                        <route.component {...props} routes={route.routes} />
                      )}  />

                    }
                  })
                }
              </div>
              </Content>
            </Layout>
         </Router> 
       </div>
    );
  }
}

export default App;

