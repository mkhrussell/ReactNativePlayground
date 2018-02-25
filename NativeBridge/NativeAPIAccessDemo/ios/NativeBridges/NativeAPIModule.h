//
//  NativeAPIModule.h
//  NativeAPIAccessDemo
//
//  Created by Mohammad Kamrul Hasan on 24/2/18.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>
#import <React/RCTEventEmitter.h>

@interface NativeAPIModule : RCTEventEmitter <RCTBridgeModule>

@end
