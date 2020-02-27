import React from 'react';
import { Layout, Button } from 'antd';
import './App.css';
import { Route, Redirect, IndexRoute } from 'react-router'
import { withRouter, Switch } from "react-router-dom";
import Main from './components/main/index';

const { Header, Footer } = Layout;

class App extends React.Component {
    render() {
        return (
            <Layout className='vstretch' style={{ height: '100%' }}>
                <Header className="layout-header-primary">
                    <div className="logo" >
                        <span className='title' style={{ fontSize: 24, color: '#FFF' }} >Antd Study</span>
                    </div>
                </Header>
                <div className='body' style={{ height: '100%' }} >
                    <Switch>
                        <Redirect exact path='/' to='/main' />
                        <Route path="/main" component={Main} />
                    </Switch>
                </div>
                <Footer className='htcenter' style={{ textAlign: "center" }}>
                    XXX技术股份有限公司 ©2020 版权所有
                </Footer>
            </Layout>
        );
    }
}

export default withRouter(App);