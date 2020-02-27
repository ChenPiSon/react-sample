import React from 'react';
import {Layout} from 'antd';
import './App.css';
import Main from './components/main/main.js'
import { Route, Redirect } from 'react-router'
import { withRouter,Switch } from "react-router-dom";

const { Header,Footer } = Layout;

class App extends React.Component {
  render() {
      return (
        <Layout className='vstretch'>
        <Header className="layout-header-primary">
            <div className="logo" >
                <span className='title' style={{ fontSize: 24, color: '#FFF' }} >Antd Study</span>
            </div>
        </Header>
        <div className='body'>
            <Switch> 
                <Redirect exact  path='/main' to='/main/home'/>
                <Route path="/main/home" component={Main}/>
            </Switch>
        </div>
        <Footer className='htcenter' style={{textAlign:"center"}}>
            XXX技术股份有限公司 ©2020 版权所有
        </Footer>
    </Layout>
      );
  }
}

export default withRouter(App);