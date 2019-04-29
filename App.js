/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
// 组件的书写
import Hello, {name, age} from './src/Hello'
// 模拟组件生命周期
import Lift from './src/Lift'
// props
import Props from './src/Props'
// status
import State from './src/State'
// ref
import Ref from './src/Ref'
// class
import Student from './src/Student'
import MayStudent from './src/MayStudent'

// flex
import FlexBox from './src/FlexBox'

export default class App extends Component {

    constructor (props) {
        super(props)
        this.state = ({
          remove: false,
          size: 0
        })
        this.student = new Student('MM', '女', 16)
        this.may = new MayStudent();

    }



    render() {
        let param = {name: 'huimin', age: 18, sex: '女'}
        let {name, sex} = param
        let view = this.state.remove? null: <Lift name='may'/>
        let text = this.state.remove ? '复活': '删除'
        return (
            <View style={styles.container}>
                {/*<Hello name='may'/>*/}
                {/*<Text*/}
                    {/*style={{fontSize: 20}}*/}
                    {/*onPress={() => {*/}
                        {/*this.setState({*/}
                            {/*remove: !this.state.remove*/}
                        {/*})*/}
                    {/*}}>{text}</Text>*/}
                {/*{view}*/}
                {/*<Text style={{fontSize: 20}}>{name}</Text>*/}
                {/*<Text style={{fontSize: 20}}>{age}</Text>*/}
                {/*<Props {...param}/>*/}
                {/*<Props name={name} sex={sex}/>*/}

                {/*<State />*/}

                {/*<Text style={{fontSize: 20}}*/}
                       {/*onPress={() => {*/}
                           {/*let size = this.refs.refTest.getSize()*/}
                           {/*this.setState({*/}
                               {/*size: size*/}
                           {/*})*/}
                            {/*// this.refs.refTest*/}
                           {/*// this.refs['refTest']*/}
                       {/*}}>获取气球大小{this.state.size}</Text>*/}
                    {/*<Ref ref='refTest' />*/}

                {/*<Text style={{fontSize: 20}}*/}
                      {/*onPress={() => {*/}
                          {/*let size = this.refTest.getSize()*/}
                          {/*this.setState({*/}
                              {/*size: size*/}
                          {/*})*/}
                          {/*// this.refs.refTest*/}
                          {/*// this.refs['refTest']*/}
                      {/*}}>1获取气球大小{this.state.size}</Text>*/}
                    {/*<Ref ref={refTest => this.refTest = refTest} />*/}

                {/*<Text>{this.student.getDescription()}</Text>*/}
                {/*<Text>{this.may.getDescription()}</Text>*/}

                <FlexBox />
            </View>
        )
    }
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        marginTop: 150
    }
});
