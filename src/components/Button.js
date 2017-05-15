import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text
} from 'react-native';

class Button extends Component {
  constructor(props) {
      super(props);
      this.state = {
        btnTxt: ''
      };
  }

  render() {
    return (
      <TouchableOpacity onPress={() => {this.props.onPress()}} style={styles.cardButtonWrap}>
          <Text style={styles.cardButton}>{this.props.btnTxt}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create( {
  cardButtonWrap: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  },
  cardButton: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  }
});

export default Button;
