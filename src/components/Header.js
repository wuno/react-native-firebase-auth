import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View
} from 'react-native';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {heading: ''};
    }
  render() {
    return (
      <View style={styles.viewStyle}>
        <Text style={styles.headerText}>
          {this.props.heading}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  headerText: {
    fontSize: 20
  },
});

export default Header;
