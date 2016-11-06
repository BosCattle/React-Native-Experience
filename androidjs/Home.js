/**
 * Created by kevin on 06/11/2016.
 * author: Kevin
 * email: jiangtao103cp@gmail.com
 */

//noinspection JSUnresolvedVariable
import React, {Component, PropTypes} from 'react';
//noinspection JSUnresolvedVariable
import {StyleSheet, Navigator, ToolbarAndroid, Text, View, ListView, Image} from 'react-native';
var items = [];
class Home extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        for (var i = 0;i<10000;i++){
            items[i] = {name: 'John', image: {uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1478341620683&di=b3fe17a82482aeccf43f03682bb510dd&imgtype=0&src=http%3A%2F%2Fimage.tianjimedia.com%2FuploadImages%2F2014%2F067%2F5116EPAUD762_1000x500.jpg'}};
        }
        this.state = {
            dataSource: ds.cloneWithRows(items)
        };
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <ToolbarAndroid
                    style={styles.toolbar}
                    logo={require('../img/ic_arrow_x.png')}
                    title="首页"/>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => (
                        <View style={styles.container}>
                            <View style={styles.listItemStyle}>
                                <Image source={rowData.image} style={styles.imageItems}/>
                                <Text style={styles.textItems}>{rowData.name}</Text>
                            </View>
                            <View style={styles.divider}/>
                        </View>
                    )
                    }
                />
            </View>
        );
    }
}
var styles = StyleSheet.create({
    toolbar: {
        backgroundColor: 'red',
        height: 56
    },
    logoStyle: {
        width: 24,
        height: 24
    },
    titleColor: {
        color: 'white'
    },
    listItemStyle: {
        flex: 1,
        flexDirection: 'row'
    },
    imageItems: {
        margin: 10,
        flex: 1,
        justifyContent: 'flex-start',
        width: 100,
        height: 200
    },
    textItems: {
        flex: 1,
        padding: 10,
        marginRight: 20,
        justifyContent: 'flex-end',
        textAlign: 'right',
        alignItems: 'flex-end',
        fontSize: 20
    },
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    divider:{
        height: 20,
        backgroundColor: '#DCDCDC'
    }
});
export default Home