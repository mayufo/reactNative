// 模拟组件生命周期
import React, {Component} from 'react';
import {View, Text} from 'react-native';


export default class Hello extends Component {
    constructor(props) {
        super(props);   // 完成组件初始化
        console.log('--constructor--');
        this.state = {
            count: 0
        }
    }

    componentWillMount () {
        console.log('--componentWillMount--');
    }

    componentDidMount () {
        console.log('--componentDidMount--');
    }

    componentWillReceiveProps (nextProps) {
        console.log('--componentWillReceiveProps--');
    }

    shouldComponentUpdate (nextProps, nextState) {
        console.log('--shouldComponentUpdate--');
        return true
    }

    componentWillReceiveProps () {
        console.log('--componentWillReceiveProps--');
    }

    componentDidUpdate () {
        console.log('--componentDidUpdate--');
    }

    componentWillUnmount () {
        console.log('--componentWillUnmount--');
    }

    render() {
        console.log('--render--');
        return (
            <View>
                <Text
                    style={{fontSize: 20, backgroundColor: 'red'}}
                    onPress={() => {
                        this.setState({
                            count: this.state.count + 1
                        })
                    }}
                >Hello, {this.props.name}</Text>
                <Text style={{fontSize: 20}}>{this.state.count}</Text>
            </View>
        )
    }
}
