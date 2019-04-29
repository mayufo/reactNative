/**
 * User: mayufo@aliyun.com
 * Date: 2019/4/29
 * Time: 4:44 PM
 * GitHub: https://github.com/mayufo/
 */

import React, {Component} from "react";
import {View, Image, Text} from "react-native";

export default class Hello extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={{flexDirection:'row',backgroundColor:"darkgray",marginTop:20, alignItems: 'flex-end', height: 500}}>
                <View style={ {width:40,height:40,backgroundColor:"darkcyan",margin:5}}>
                    <Text style={ {fontSize:16}}>1</Text>
                </View>
                <View style={ {width:40,height:40,backgroundColor:"darkcyan",margin:5}}>
                    <Text style={ {fontSize:16}}>2</Text>
                </View>
                <View style={ {width:40,height:40,backgroundColor:"darkcyan",margin:5}}>
                    <Text style={ {fontSize:16}}>3</Text>
                </View>
                <View style={ {width:40,height:40,backgroundColor:"darkcyan",margin:5}}>
                    <Text style={ {fontSize:16}}>4</Text>
                </View>
            </View>

        )
    }
}
