// 组件的书写
import React, {Component} from 'react';
import {Text} from 'react-native';
var createReactClass = require('create-react-class');


let name = 'may';

let age = '22';

export {name, age}
// es 6 推荐
export default class Hello extends Component {
    render() {
        return (
            <Text style={{fontSize: 20, backgroundColor: 'red'}}>Hello, {this.props.name}</Text>
        )
    }
}

// 方法2: es 5
// const Hello = createReactClass({
//     render () {
//         return <Text style={{fontSize: 20, backgroundColor: 'red'}}>Hello</Text>
//     }
// })
//
// module.exports = Hello

// 方法3: 函数式
// 无状态 无法使用this

// function Hello (props) {
//     return <Text style={{fontSize: 20, backgroundColor: 'red'}}>Hello, {props.name}</Text>
// }
//
//
// module.exports = Hello



// export var name = 'may'

