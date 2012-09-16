/**
 * benCoding.Map Project
 * Copyright (c) 2009-2012 by Ben Bahrenburg. All Rights Reserved.
 * Licensed under the terms of the Apache Public License
 * Please see the LICENSE included with this distribution for details.
 */

#import "TiModule.h"
@interface BencodingMapModule : TiModule 
{
    
}
//Vince Added
/*The mode used to track the user location on the map.

enum {
    MKUserTrackingModeNone = 0,
    MKUserTrackingModeFollow,
    MKUserTrackingModeFollowWithHeading,
};
typedef NSInteger MKUserTrackingMode;
*/

@property(nonatomic,readonly) NSNumber *USER_TRACKING_MODE_NONE;
@property(nonatomic,readonly) NSNumber *USER_TRACKING_MODE_FOLLOW;
@property(nonatomic,readonly) NSNumber *USER_TRACKING_MODE_FOLLOW_WITH_HEADING;
//
@end
