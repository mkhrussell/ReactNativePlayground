import React, { Component } from 'react';
import { StyleSheet, Modal, View, Text, TouchableHighlight, Platform } from 'react-native';

class ContactDetails extends Component {
  state = {
    modalVisible: false,
    data: null
  };

  showModal = (data) => {
    this.setState({ data, modalVisible: true, });
  }

  render() {
    return (
      <Modal animationType="slide"
        transparent={false}
        visible={this.state.modalVisible}
        onRequestClose={() => console.log('Closing detail page.')}>
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableHighlight style={styles.backButton} onPress={() => this.setState({ modalVisible: false })}>
              <Text>Back</Text>
            </TouchableHighlight>
            <View style={styles.contactName}>
              <Text>{this.state.data ? this.state.data.name : ''}</Text>
            </View>
          </View>
          <View style={{ width: '100%', height: '100%' }}>
            <Text>Phone: {this.state.data ? this.state.data.phone : ''}</Text>
            <Text>Email: {this.state.data ? this.state.data.email : ''}</Text>
            <Text>Company: {this.state.data ? this.state.data.company : ''}</Text>
          </View>
        </View>
      </Modal>
    );
  }
}

export default ContactDetails;

const styles = StyleSheet.create({
  container: {
    marginTop: 22,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  header: {
    flexDirection: "row",
    alignItems: 'center',
    height: Platform.OS == "ios" ? 64 : 56,
    marginTop: Platform.OS == "ios" ? 20 : 0
  },
  backButton: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    zIndex: 5
  },
  contactName: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: -32
  }
});
