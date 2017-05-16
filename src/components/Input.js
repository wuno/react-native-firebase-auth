import React, { Component } from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      label: '',
      value: '',
      onChangeText: '',
      placeholder: '',
      secureTextEntry: true
    }
  }

  render() {
    return(
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>{this.props.label}</Text>
        <TextInput
          style={styles.inputStyle}
          value={this.value}
          onChangeText={this.props.onChangeText}
          autoCorrect={false}
          placeholder={this.props.placeholder}
          secureTextEntry={this.props.secureTextEntry}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create( {
  inputStyle: {
    width: 100,
    height: 40,
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 3,
  },
  inputLabel: {
    fontSize: 16,
    paddingLeft: 20,
    flex: 1
  },
  inputContainer: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
});

export default Input;
