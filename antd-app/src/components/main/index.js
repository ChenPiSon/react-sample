import { Menu, Icon, Layout, Slider, Text } from 'antd';
import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import Idol from '../idol/index';


const { SubMenu } = Menu;
const navigationList = [
    {
        id: 0,
        navName: '个人空间',
        navKey: 'sys-manage',
        children: [
            {
                id: 1001,
                navName: '我的关注',
                navKey: 'argument',
                navComponent: Idol
            },
            {
                id: 1002,
                navName: '我的动态',
                navKey: 'info-manage',
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
                    {/* <Link key={item.navKey} to={`/main/home/${item.navKey}`}>
                    </Link> */}
                </Menu.Item>
            }
            const key = `sub${item.id}`
            return <SubMenu key={key} title={item.navName}>
                {
                    item.children.map(child =>
                        <Menu.Item key={child.navKey ? child.navKey : child.id} name={child.navName}>
                            {/* <Link key={child.navKey} to={`/main/home/${item.navKey}/${child.navKey}`}>
                                {child.navName}
                            </Link> */}
                            {child.navName}
                        </Menu.Item>
                    )
                }
            </SubMenu>
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
            </Layout>
        );
    }
}


