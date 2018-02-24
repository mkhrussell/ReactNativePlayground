//
//  NativeAPIModule.m
//  NativeAPIAccessDemo
//
//  Created by Mohammad Kamrul Hasan on 24/2/18.
//  Copyright © 2018 Facebook. All rights reserved.
//

#import "NativeAPIModule.h"

@implementation NativeAPIModule

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(addNumbers:(double)a  with:(double)b callback:(RCTResponseSenderBlock)callback)
{
  double sum = a + b;
  callback(@[@(sum)]);
}

RCT_EXPORT_METHOD(makeGreetingText:(NSString *)name resolver: (RCTPromiseResolveBlock)resolve rejecter: (RCTPromiseRejectBlock)reject)
{
  NSString *errorCode = @"1";
  NSString *errorMessage = @"name can't be null or empty in makeGreetingText.";
  
  if( (name == (id) [NSNull null] || [name length] == 0 || [name isEqual:@""])) {
    reject(errorCode, errorMessage, nil);
  } else {
    NSString *trimmedName = [name stringByTrimmingCharactersInSet: [NSCharacterSet whitespaceCharacterSet]];
    if([trimmedName length] == 0 || [trimmedName isEqual:@""]) {
      reject(errorCode, errorMessage, nil);
    } else {
      NSString *greetingText = [NSString stringWithFormat:@"Hello %@, Welcome to Native Module Demo.", trimmedName];
      resolve(greetingText);
    }
  }
}

@end
