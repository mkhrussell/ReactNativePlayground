import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CustomButton from '../components/CustomButton';

import NativeAPIModule from '../../api/NativeAPIModule';

export default class PromiseBased extends Component {
    
    static navigationOptions = {
        title: "Promise Based Demo",
        headerStyle: {
            justifyContent: 'center'
        },
        headerTitleStyle: {
            alignSelf: 'center',
        }
    }
    
    state = {
        greetingText: ''
    }
    
    // Native method with Promise
    // You have to use async/await
    generateGreetingAsync = async () => { // async
        try {
            const greetingText = await NativeAPIModule.makeGreetingText("User"); // await
            this.setState({greetingText: greetingText});
        } catch (error) {
            console.error(error);
        }
    }
    
    // Native method with Promise
    // Just use Promise directly (then/catch)
    generateGreetingPromise = () => {
        NativeAPIModule.makeGreetingText("User")
        .then(greetingText => {
            this.setState({greetingText: greetingText});
        })
        .catch(error => {
            console.log(error)
        });
    }
    
    resetHandler = () => {
        this.setState({greetingText: ''});
    }
    
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.text}>{this.state.greetingText || 'Press Generate Greeting'}</Text>
                    <CustomButton style={{marginTop: 10}} title="Generate Greeting (async/await)" onPress={this.generateGreetingAsync} />
                    <CustomButton style={{marginTop: 10}} title="Generate Greeting (Promise)" onPress={this.generateGreetingPromise} />
                    <CustomButton style={{marginTop: 10}} title="Reset" onPress={this.resetHandler} />
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
