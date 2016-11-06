/**
 * Created by kevin on 06/11/2016.
 */

//noinspection JSUnresolvedVariable
import React,{Component} from 'react';
//noinspection JSUnresolvedVariable
import {StyleSheet, Navigator,Dimensions,Image} from 'react-native';
import Main from './Main'
var {height, width} = Dimensions.get('window');

 export default class Launch extends Component{
    render(){
        return(
        <Image
            style={{flex: 1, width: width, height: height}}
            source={require('../img/launch.png')}/>
        )
    }

     componentDidMount(){
         console.log("FirstPage: componentDidMount");
         setTimeout(
             ()=>{
                 this.props.navigator.replace(
                     {
                         component:Main
                     }
                 )
             },3000
         );
     }

     componentWillUnmount() {
         console.log("FirstPage: componentWillUnmount");
     }
}
