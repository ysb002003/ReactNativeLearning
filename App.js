/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Counter from './src/component/Counter';

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.initValues = [1, 2, 3];
    const initSum = this.initValues.reduce((a, b) => a + b, 0);
    this.state = {
      totalNumber: initSum
    };
    this._updateNumber = this._updateNumber.bind(this);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          合计{this.state.totalNumber}
        </Text>
        <Counter initValue={this.initValues[0]} style={{ margin: 10 }} onUpdateNumber={this._updateNumber}></Counter>
        <Counter initValue={this.initValues[1]} style={{ margin: 10 }} onUpdateNumber={this._updateNumber}></Counter>
        <Counter initValue={this.initValues[2]} style={{ margin: 10 }} onUpdateNumber={this._updateNumber}></Counter>
      </View>
    );
  };

  _updateNumber(newValue, oldValue) {
    const value = newValue - oldValue;
    this.setState({ totalNumber: this.state.totalNumber + value });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    borderWidth: 10
  },
  welcome: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
    color: 'red'
  },

});
