import React, { Component } from 'react';
import { StyleSheet, Text, View, NativeEventEmitter } from 'react-native';
import CustomButton from '../components/CustomButton';

// Import Native Module and Emmitter instance
import NativeAPIModule from '../../api/NativeAPIModule';
import nativeEventEmitter from '../../api/nativeEventEmitter';

export default class EventEmitter extends Component {

    constructor(props) {
        super(props);
        this.subscription = null;
    }
    
    static navigationOptions = {
        title: "Event Emitter Demo",
        headerStyle: {
            justifyContent: 'center'
        },
        headerTitleStyle: {
            alignSelf: 'center',
        }
    }
    
    state = {
        subscribed: false,
        message: null
    }

    removeEventSubscription = () => {
        if(this.subscription) this.subscription.remove();
        this.subscription = null;
        this.setState({subscribed: false, message: null});
    }

    componentWillUnmount() {
        this.removeEventSubscription();
    }
  
    // Manually trigger an event
    generateEventHandler = () => {
        if(this.subscription) {
            NativeAPIModule.generateEvent();
        } else {
            alert(`Subscribe to: 'onGenerateEvent' first.`)
        }
    }
    
    subscribeHandler = () => {
        if(this.state.subscribed || this.subscription) {
            this.removeEventSubscription();
        } else {
            // Subscribe to event; make sure to remove
            this.subscription = nativeEventEmitter.addListener('onGenerateEvent', (response) => {
                this.setState({message: response.message});
            });
            if(this.subscription) {
                this.setState({subscribed: true});
            } else {
                console.log("Error: Unable to subscribe to: onGenerateEvent.")
            }
        }    
    }
    
    render() {
        let subscribeBtnTxt = "Subscribe";
        if(this.state.subscribed) {
            subscribeBtnTxt = "Unsubscribe"
        }
        return (
            <View style={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.text}>Press Subscribe and then Press Generate Events</Text>
                    <CustomButton style={{marginTop: 10}} title="Generate Event" onPress={this.generateEventHandler} />
                    <View style={{marginTop: 10, flexDirection: 'row', justifyContent: 'center'}}>
                        <Text style={styles.text}>Message: </Text>
                        <Text style={styles.text}>{this.state.message || '?'}</Text>
                    </View>
                    <CustomButton style={{marginTop: 10}} title={subscribeBtnTxt} onPress={this.subscribeHandler} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        width: '100%',
    },
    text: {
        alignSelf: 'center',
        fontSize: 16
    }
});
