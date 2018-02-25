package com.nativeapiaccessdemo;

import android.support.annotation.Nullable;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.module.annotations.ReactModule;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.Arguments;

import java.util.Map;
import java.util.HashMap;

@ReactModule(name = "NativeAPIModule")
public class NativeAPIModule extends ReactContextBaseJavaModule {
        
    public NativeAPIModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "NativeAPIModule";
    }

    @Override
    public Map<String, Object> getConstants() {
        final Map<String, Object> constants = new HashMap<>();
        constants.put("FIRST_DAY_OF_WEEK", "Monday");
        constants.put("FIRST_MONTH_OF_YEAR", "January");
        return constants;
    }

    @ReactMethod
    public void addNumbers(final double a, final double b, Callback callback) {
        double result = a + b;
        callback.invoke(result);
    }

    @ReactMethod
    public void makeGreetingText(final String name, Promise promise) {
        String errorCode = "1";
        String errorMessage = "name can't be null or empty in makeGreetingText.";

        if( name == null || name.isEmpty() || (name.trim().isEmpty()) ) {
            promise.reject(errorCode, errorMessage);
        } else {
            promise.resolve(String.format("Hello %s, Welcome to Native Module Demo.", name));            
        }
    }

    // Event Emitter Helper
    private void sendEvent(String eventName, @Nullable WritableMap params) {
        getReactApplicationContext()
            .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
            .emit(eventName, params);
    }

    // Manually generate event
    @ReactMethod
    public void generateEvent() {
        WritableMap params = Arguments.createMap();
        params.putString("message", "I am from generated event.");
        
        // Call helper to send event
        sendEvent("onGenerateEvent", params);
    }
}