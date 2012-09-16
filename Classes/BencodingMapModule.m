/**
 * benCoding.Map Project
 * Copyright (c) 2009-2012 by Ben Bahrenburg. All Rights Reserved.
 * Licensed under the terms of the Apache Public License
 * Please see the LICENSE included with this distribution for details.
 */

#import "BencodingMapModule.h"
#import "TiBase.h"
#import "TiHost.h"
#import "TiUtils.h"

#import <MapKit/MapKit.h>

@implementation BencodingMapModule

//Vince Added
MAKE_SYSTEM_PROP(USER_TRACKING_MODE_NONE,MKUserTrackingModeNone);
MAKE_SYSTEM_PROP(USER_TRACKING_MODE_FOLLOW,MKUserTrackingModeFollow);
MAKE_SYSTEM_PROP(USER_TRACKING_MODE_FOLLOW_WITH_HEADING,MKUserTrackingModeFollowWithHeading);
//

#pragma mark Internal

// this is generated for your module, please do not change it
-(id)moduleGUID
{
	return @"9dbefa0e-59e0-4147-9c62-a0b9a4a6b41b";
}

// this is generated for your module, please do not change it
-(NSString*)moduleId
{
	return @"bencoding.map";
}

@end
