import React, {Component} from "react";
import {View, Image, Text} from "react-native";

export default class Hello extends Component {
    constructor(props) {
        super(props)
        this.state = {
            size: 80
        }
    }
    render() {
        return (
            <View>
                <Text
                    style={{fontSize: 20}}
                    onPress={() => {
                    this.setState({
                        size: this.state.size + 10
                    })
                }}>我吹呀吹呀</Text>

                <Text
                    style={{fontSize: 20}}
                    onPress={() => {
                        this.setState({
                            size: this.state.size - 10
                        })
                    }}>放气，放气</Text>

                <Image
                    style={{width: this.state.size, height: this.state.size}}
                    source={require('./ballon.jpg')}/>
            </View>
        )
    }
}
