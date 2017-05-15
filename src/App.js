import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <View>
        <Text>
          Hey this is the app!
        </Text>
      </View>
    );
  }
}

export default App;
