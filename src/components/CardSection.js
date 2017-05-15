import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

class CardSection extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <View style={styles.cardStyle}>
        {this.props.children}
      </View>
    );
  }
}

const styles = StyleSheet.create( {
  cardStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd'
  }
});

export default CardSection;
