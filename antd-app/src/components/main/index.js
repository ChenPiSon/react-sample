import { Menu, Icon, Layout, Slider, Text } from 'antd';
import React, { Component } from 'react';
import { Switch, Link } from 'react-router-dom';
import { Redirect, Route } from 'react-router';
import Idol from '../idol/index';

const { SubMenu } = Menu;
const { Sider, Content } = Layout;

const navigationList = [
    {
        id: 0,
        navName: '个人空间',
        navKey: 'sys-manage',
        children: [
            {
                id: 1001,
                navName: '我的关注',
                navKey: 'follow',
                navComponent: Idol
            },
            {
                id: 1002,
                navName: '我的动态',
                navKey: 'state',
                navComponent: Idol
            },
        ]
    }
];


export default class Main extends React.Component {
    // submenu keys of first level
    rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

    state = {
        openKeys: ['sub1'],
    };

    // 渲染导航菜单
    renderMenu = () => {
        return navigationList.map(item => {
            if (!item.children || item.children.length === 0) {
                return <Menu.Item key={item.navKey ? item.navKey : item.id} name={item.navName}  >
                    <Link key={item.navKey} to={`/main/${item.navKey}`}>
                    </Link>
                </Menu.Item>
            }
            const key = `sub${item.id}`
            return <SubMenu key={key} title={item.navName}>
                {
                    item.children.map(child =>
                        <Menu.Item key={child.navKey ? child.navKey : child.id} name={child.navName}>
                            <Link key={child.navKey} to={`/main/${item.navKey}/${child.navKey}`}>
                                {child.navName}
                            </Link>
                            {child.navName}
                        </Menu.Item>
                    )
                }
            </SubMenu>
        })
    }

    renderRouter = () => {
        const { match } = this.props
        return navigationList.map(item => {
            if (!item.children || item.children.length === 0) {
                return <Route key={item.navKey} path={`${match.url}/${item.navKey}`} component={item.navComponent}></Route>
            }
            return (
                item.children.map(child =>
                    <Route key={child.navKey} path={`${match.url}/${item.navKey}/${child.navKey}`} component={child.navComponent}></Route>
                )
            )
        })
    }

    render() {
        return (
            <Layout style={{ height: '100%' }}>
                <Menu
                    mode="inline"
                    style={{ height: '100%', padding: '24px 0',width:'20%' }}>
                    {this.renderMenu()}
                </Menu>
                <Content style={{ height: '100%', marginLeft: 20 }}>
                    <div style={{ backgroundColor: '#F6F6F6', height: '100%', }}>
                        <Switch style={{ padding: '24px 0', backgroundColor: '#F6F6F6' }}>
                            {this.renderRouter()}
                        </Switch>
                    </div>
                </Content>

            </Layout>
        );
    }



}


