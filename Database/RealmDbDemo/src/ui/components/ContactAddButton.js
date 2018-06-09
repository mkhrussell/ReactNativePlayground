import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';

import floatingButtonImage from '../../../assets/FloatingButton.png';

const ContactAddButton = (props) => {
  return (
    <TouchableOpacity
      style={styles.touchableOpacityStyle}
      activeOpacity={0.5}
      onPress={props.onPress}
    >
      <Image
        source={floatingButtonImage}
        style={styles.floatingButtonImageStyle}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  touchableOpacityStyle: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
  },
  floatingButtonImageStyle: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
  }
});

export default ContactAddButton;