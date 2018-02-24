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

@end
