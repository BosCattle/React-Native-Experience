/**
 * Created by kevin on 06/11/2016.
 */

//noinspection JSUnresolvedVariable
import React, {Component, PropTypes} from 'react';
//noinspection JSUnresolvedVariable
import {AppRegistry, StyleSheet, Text, View, Image, TextInput, TouchableHighlight, Navigator} from 'react-native';
import MyScene from './MyScene';
//noinspection JSUnresolvedVariable
import Home from './Home';
import Find from './Find';
import Store from './Store';
import Tab from './Tab';
import Personal from './Personal';
import TabNavigator from 'react-native-tab-navigator';


export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {selectedTab: 'home'};
    }

    render() {
        return (
            <TabNavigator tabBarStyle={{height: 60}}>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'home'}
                    title="首页"
                    renderIcon={() => <Image source={require("../img/ic_bar_home.png")} style={styles.iconStyle}/>}
                    renderSelectedIcon={() => <Image source={require("../img/ic_bar_home_red.png")}
                                                     style={styles.iconStyle}/>}
                    titleStyle={styles.titleStyle}
                    selectedTitleStyle={styles.selectedTextStyle}
                    onPress={() => this.setState({selectedTab: 'home'})}>
                    <Home {...this.props}/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'find'}
                    title="发现"
                    renderIcon={() => <Image source={require("../img/ic_tab_bar_find.png")} style={styles.iconStyle}/>}
                    renderSelectedIcon={() => <Image source={require("../img/ic_tab_bar_find_red.png")}
                                                     style={styles.iconStyle}/>}
                    titleStyle={styles.titleStyle}
                    selectedTitleStyle={styles.selectedTextStyle}
                    badgeText="2"
                    onPress={() => {
                        this.setState({selectedTab: 'find'})
                    }}>
                    <Find {...this.props}/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'market'}
                    title="商店"
                    renderIcon={() => <Image source={require("../img/ic_tab_bar_market.png")} style={styles.iconStyle}/>}
                    renderSelectedIcon={() => <Image source={require("../img/ic_tab_bar_market_red.png")}
                                                     style={styles.iconStyle}/>}
                    titleStyle={styles.titleStyle}
                    selectedTitleStyle={styles.selectedTextStyle}
                    onPress={() => this.setState({selectedTab: 'market'})}>
                    <Store {...this.props}/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'transaction'}
                    title="标签"
                    renderIcon={() => <Image source={require("../img/ic_tab_bar_transaction.png")}
                                             style={styles.iconStyle}/>}
                    renderSelectedIcon={() => <Image source={require("../img/ic_tab_bar_transaction_red.png")}
                                                     style={styles.iconStyle}/>}
                    titleStyle={styles.titleStyle}
                    selectedTitleStyle={styles.selectedTextStyle}
                    onPress={() => this.setState({selectedTab: 'transaction'})}>
                    <Tab {...this.props}/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'mine'}
                    title="我的"
                    renderIcon={() => <Image source={require("../img/ic_tab_bar_mine.png")} style={styles.iconStyle}/>}
                    renderSelectedIcon={() => <Image source={require("../img/ic_tab_bar_mine_red.png")}
                                                     style={styles.iconStyle}/>}
                    titleStyle={styles.titleStyle}
                    selectedTitleStyle={styles.selectedTextStyle}
                    badgeText="5"
                    onPress={() => this.setState({selectedTab: 'mine'})}>
                    <Personal {...this.props}/>
                </TabNavigator.Item>
            </TabNavigator>
        );
    }
}

const styles = StyleSheet.create({
        iconStyle: {
            width: 30,
            height: 30
        },
        titleStyle: {
            fontSize: 12,
        },
        selectedTextStyle:{
            color: 'red'
        }
    }
);

