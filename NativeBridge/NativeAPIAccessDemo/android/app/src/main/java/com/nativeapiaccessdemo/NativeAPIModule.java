package com.nativeapiaccessdemo;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.module.annotations.ReactModule;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;

import java.util.Map;

@ReactModule(name = "NativeAPIModule")
public class NativeAPIModule extends ReactContextBaseJavaModule {
        
    public NativeAPIModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "NativeAPIModule";
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
}