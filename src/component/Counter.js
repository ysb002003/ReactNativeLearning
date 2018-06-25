import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    TextInput
} from 'react-native';

import PropTypes from 'prop-types';

export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.initValue || 1,
            style: this.props.style,
        };
    }

    static defaultProps = {
        initValue: 1,
        onUpdateNumber: f => f
    }

    render() {
        return (
            <View style={[styles.operatingBox, this.state.style]}>
                <TouchableOpacity activeOpacity={0.5} onPress={this._reduce.bind(this)}>
                    <View style={styles.reduceBox}>
                        <Text style={styles.btnReduce}>
                            -
                        </Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.inputBox}>
                    <TextInput style={styles.input}
                        value={this.state.value.toString()}
                        maxLength={3}
                        onEndEditing={this._checkNumber.bind(this)}
                        keyboardType="numeric"
                        onChangeText={(txt) => this._changeText(txt)}
                        autoFocus={false}
                        underlineColorAndroid="transparent"
                    >
                    </TextInput>
                </View>
                <TouchableOpacity activeOpacity={0.5} onPress={this._plus.bind(this)}>
                    <View style={styles.plusBox}>
                        <Text style={styles.btnPlus}>
                            +
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }

    _checkNumber() {
        let number = this.state.value;
        if (number == '' || number < 1) {
            number = 1;
        } else {
            number = Math.floor(number);
        }

        this.setState({ value: number });
    }

    _reduce() {
        this._changeText(this.state.value - 1);
    }

    _plus() {
        this._changeText(this.state.value + 1);
    }

    _changeText(txt) {
        this.setState({ value: Number(txt) });
        this.props.onUpdateNumber(txt, this.state.value);
    }
};

const styles = StyleSheet.create({
    operatingBox: {
        width: 120,
        height: 35,
        borderColor: '#ddd',
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5,
        overflow: 'hidden'
    },
    reduceBox: {
        width: 34,
        height: 34,
        alignItems: 'center',
        justifyContent: 'center',
        borderRightWidth: 1,
        borderRightColor: '#ddd'
    },
    btnReduce: {
        fontSize: 18,
        textAlign: 'center',
        backgroundColor: 'transparent'
    },
    inputBox: {
        flex: 1,
        borderRightWidth: 1,
        borderRightColor: '#ddd'
    },
    input: {
        flex: 1,
        padding: 0,
        textAlign: 'center',
        backgroundColor: 'transparent',
        fontSize: 14
    },
    plusBox: {
        width: 34,
        height: 34,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnPlus: {
        fontSize: 18,
        textAlign: 'center',
        backgroundColor: 'transparent'
    },
});

Counter.propTypes = {
    initValue: PropTypes.number,
    style: PropTypes.object
};