import { NativeEventEmitter } from 'react-native';

import NativeAPIModule from './NativeAPIModule';
// Create Emitter from Native Module
const nativeEventEmitter = new NativeEventEmitter(NativeAPIModule);

export default nativeEventEmitter;
