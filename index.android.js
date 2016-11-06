/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
//noinspection JSUnresolvedVariable
import {
    Dimensions,
    Image,
    InteractionManager,
    View,
    Text,
    AppRegistry,
    Navigator
} from 'react-native';

import Launch from './androidjs/Launch';
class Splash extends React.Component {
    constructor(props) {
        super(props);
    }

    configureScene(route, routeStack) {
        if (route.sceneConfig) { // 有设置场景
            return route.sceneConfig;
        }
        return Navigator.SceneConfigs.PushFromRight; // 默认，右侧弹出
    }

    renderScene(route, navigator) {
        return <route.component {...route.passProps} navigator={navigator}/>;
    }

    render() {
        return (
                <Navigator
                    style={{flex: 1}}
                    initialRoute={{id: 'main', component: Launch}}
                    configureScene={this.configureScene}
                    renderScene={this.renderScene}
                />
        );
    }
}
AppRegistry.registerComponent('RNExperience', () => Splash);
