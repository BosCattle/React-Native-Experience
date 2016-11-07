/**
 * Created by kevin on 06/11/2016.
 * author: Kevin
 * email: jiangtao103cp@gmail.com
 */

//noinspection JSUnresolvedVariable
import React, {Component, PropTypes} from 'react';
//noinspection JSUnresolvedVariable
import {StyleSheet, Navigator, ToolbarAndroid, InteractionManager, Text, Image, View} from 'react-native';
class Personal extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <ToolbarAndroid
                    style={styles.toolbar}
                    logo={require('../img/ic_arrow_x.png')}
                    title="我的"/>
                <View style={styles.divider}/>
                <View style={{flexDirection: 'row', padding: 10}}>
                    <Image
                        source={{uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1478341620683&di=b3fe17a82482aeccf43f03682bb510dd&imgtype=0&src=http%3A%2F%2Fimage.tianjimedia.com%2FuploadImages%2F2014%2F067%2F5116EPAUD762_1000x500.jpg'}}
                        style={styles.avatar}/>
                    <View style={{flex: 1, flexDirection: 'column', paddingLeft: 20}}>
                        <Text style={{paddingTop: 5, fontSize: 18}}>Kevin</Text>
                        <Text style={{paddingTop: 2}}>啦啦啦啦啦啦啦啦啦啦啦啦</Text>
                    </View>
                </View>
                <View style={styles.divider}/>
                <ListItem icon={{uri:'https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1478341620683&di=b3fe17a82482aeccf43f03682bb510dd&imgtype=0&src=http%3A%2F%2Fimage.tianjimedia.com%2FuploadImages%2F2014%2F067%2F5116EPAUD762_1000x500.jpg'}} lineColor={'#DCDCDC'} text={"我的值乎"}/>
                <ListItem icon={{uri:'../img/ic_launcher.png'}} lineColor={'#DCDCDC'} text={"我的关注"}/>
                <ListItem icon={{uri:'../img/ic_launcher.png'}} lineColor={'white'} text={"我的收藏"}/>
                <View style={styles.divider}/>
                <ListItem icon={{uri:'../img/ic_launcher.png'}} lineColor={'#DCDCDC'} text={"我的草稿"}/>
                <ListItem icon={{uri:'../img/ic_launcher.png'}} lineColor={'#DCDCDC'} text={"最近浏览"}/>
            </View>
        );
    }
}

class ListItem extends Component {
    static propTypes = {
        text: PropTypes.string.isRequired,
        icon: PropTypes.shape({
            uri: PropTypes.string,
        }).isRequired,
        lineColor: PropTypes.string.isRequired
    }
    render() {
        return (
            <View style={{flexDirection: 'row'}}>
                <Image source={this.props.icon} style={styles.iconStyle}/>
                <View style={{flex: 1, flexDirection: 'column'}}>
                    <Text style={styles.textStyle}>{this.props.text}</Text>
                    <View style={{height: 1, backgroundColor: this.props.lineColor,marginLeft: 10}}/>
                </View>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    toolbar: {
        backgroundColor: 'red',
        height: 56
    },
    divider: {
        height: 8, backgroundColor: '#DCDCDC'
    },
    avatar: {
        width: 64,
        height: 64,
        borderRadius: 32
    },
    iconStyle: {
        margin: 10,
        width: 30,
        height: 30
    },
    textStyle: {
        fontSize: 18,
        padding: 10
    }
});
export default Personal