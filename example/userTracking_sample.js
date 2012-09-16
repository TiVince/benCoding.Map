
var win = Titanium.UI.currentWindow;

var map = require('bencoding.map');


var bbMapView = Titanium.UI.createTabbedBar({
        labels:['None', 'Follow','Heading'],
        //backgroundColor:'#dark',
        
    });
    
    bbMapView.addEventListener('click', function(e){
    
    //using our namespace
    switch(e.index){
    case 0:
            mapView.setUserTrackingMode( { mode : map.USER_TRACKING_MODE_NONE, animated: true});
            break;
    case 1:
            mapView.setUserTrackingMode( { mode : map.USER_TRACKING_MODE_FOLLOW,animated: true});
            break;
    case 2:
            mapView.setUserTrackingMode( { mode: map.USER_TRACKING_MODE_FOLLOW_WITH_HEADING, animated:true});
            break;
    
            
    }
});

win.setRightNavButton(bbMapView);



var mapView = map.createView({
   
   mapType: Ti.Map.SATELLITE_TYPE,
   
      //  region: {
        //    latitude:       47.2482815,        //GPS coordinates to center the map around
        //    longitude:      -1.5393481,    //GPS coordinates to center the map around
        //    latitudeDelta:  0.05,   //Think of this like x-zoom
        //    longitudeDelta: 0.05,       //This of this like y-zoom
       // },
   //whatever extra options
   //userTrackingMode:{
    //mode: 2, //you can use 0, 1 or 2
    //animated: true, //or false
   // } 
});
mapView.latitudeDelta=  0.05;
mapView.longitudeDelta=  0.05;

mapView.addEventListener("userLocation",function(e){
    //Ti.API.info("userLocation Update !");
    label.text =  ["lat:",e.latitude.toFixed(3), "lon:",e.longitude.toFixed(3),"Heading :",e.heading.toFixed()  ].join(" ");
   
});

var label = Ti.UI.createLabel({top:0, height:20, width : "100%", text:"test", backgroundColor:"white" , textAlign:"center"});
win.add(mapView,label);
//win.add(label);
win.open();

//shows our namespace 
Ti.API.debug (map.moduleId);
Ti.API.debug (map.USER_TRACKING_MODE_NONE);
Ti.API.debug (map.USER_TRACKING_MODE_FOLLOW);
Ti.API.debug (map.USER_TRACKING_MODE_FOLLOW_WITH_HEADING);
//map.setMapType();

mapView.setUserTrackingMode({
   mode:map.USER_TRACKING_MODE_FOLLOW_WITH_HEADING, // or 2
    animated: true
});

//isUserLocationVisible
Ti.API.info( mapView.isUserLocationVisible);
Ti.API.info( mapView.isUserLocationVisible);
Ti.API.info( mapView.isUserLocationVisible);
Ti.API.info( mapView.isUserLocationVisible);
