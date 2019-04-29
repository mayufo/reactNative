import React, {Component} from "react";

import PropTypes from 'prop-types';

import {Text, View} from "react-native";

export default class Props extends Component {
    static defaultProps = {
        name: '慧敏2',
        age: '18',
        sex: 'girl'
    }
    static propTypes = {
        name: PropTypes.string,
        age: PropTypes.number,
        sex: PropTypes.string.isRequired
    }

    render() {
        return (
            <View>
                <Text style={{fontSize: 20, backgroundColor: 'red'}}>Hello, {this.props.name}</Text>
                <Text style={{fontSize: 20, backgroundColor: 'red'}}>Hello, {this.props.age}</Text>
                <Text style={{fontSize: 20, backgroundColor: 'red'}}>Hello, {this.props.sex}</Text>
            </View>
        )
    }
}
