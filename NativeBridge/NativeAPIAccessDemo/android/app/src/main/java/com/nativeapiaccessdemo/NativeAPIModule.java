package com.nativeapiaccessdemo;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.module.annotations.ReactModule;
import com.facebook.react.bridge.Callback;

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
}