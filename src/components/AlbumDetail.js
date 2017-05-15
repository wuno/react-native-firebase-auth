import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  Linking
} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

class AlbumDetail extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Card>
        <CardSection>
          <View style={styles.imageContainerStyle}>
            <Image style={styles.albumImageStyles} source={{ uri: this.props.album.thumbnail_image }} />
          </View>
          <View style={styles.headerContentStyle}>
          <Text style={styles.textStyle}>{this.props.album.title}</Text>
          <Text style={styles.textStyle}>{this.props.album.artist}</Text>
          </View>
        </CardSection>
        <CardSection>
          <Image style={styles.fullImageStyles} source={{ uri: this.props.album.image }} />
        </CardSection>
        <CardSection>
          <Button onPress={() => Linking.openURL(this.props.album.url)} btnTxt={'Buy Now!'}/>
        </CardSection>
      </Card>
    );
  }
}

const styles = StyleSheet.create( {
  textStyle: {
    fontSize: 20
  },
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  albumImageStyles: {
    height: 50,
    width: 50
  },
  fullImageStyles: {
    height: 300,
    flex: 1,
    width: null
  },
  imageContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
});

export default AlbumDetail;
