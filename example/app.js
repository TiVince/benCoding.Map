//Create our window, the usual stuff
var win  = Ti.UI.createWindow({backgroundColor:'#fff',title:'Menu', tabBarHidden:true});
var map = require('bencoding.map');



var bUsrTrkSample = Ti.UI.createButton({
    title:'User Tracking Mode', top: 360, left:30, right:30, height:42
});
win.add(bUsrTrkSample);
bUsrTrkSample.addEventListener('click',function() {
    var win = Ti.UI.createWindow({
                    url:'userTracking_sample.js',
                    backgroundColor:'#fff',
                    titlePrompt:'userTrackingMode Demo', 
                    tabBarHidden:true
            });
                    
    tab1.open(win);
});





var tabGroup = Ti.UI.createTabGroup();
var tab1 = Titanium.UI.createTab({ window:win });

var introLabel = Ti.UI.createLabel({
	text:'Welcome to the benCoding.Map module. The below demonstrate on how to use Polygons, Circles, and KML Files in your MapView projects.',
	top:20,height:100,left:10,right:10
});
win.add(introLabel);

var bPolygonSample = Ti.UI.createButton({
	title:'Polygon Samples', top: 150, left:30, right:30, height:42
});
win.add(bPolygonSample);

bPolygonSample.addEventListener('click',function() {
	var win = Ti.UI.createWindow({
					url:'polygon_sample.js',
					backgroundColor:'#fff',
					title:'Polygon Sample', 
					tabBarHidden:true
			});
					
	tab1.open(win);
});

var bCircleSample = Ti.UI.createButton({
	title:'Circle Samples', top: 220, left:30, right:30, height:42
});
win.add(bCircleSample);

bCircleSample.addEventListener('click',function() {
	var win = Ti.UI.createWindow({
					url:'circle_sample.js',
					backgroundColor:'#fff',
					title:'Circle Sample', 
					tabBarHidden:true
			});
					
	tab1.open(win,{animated:true});
});


var bKMLSample = Ti.UI.createButton({
	title:'KML File Sample', top: 290, left:30, right:30, height:42
});
win.add(bKMLSample);

bKMLSample.addEventListener('click',function() {
	var win = Ti.UI.createWindow({
					url:'kml_sample.js',
					backgroundColor:'#fff',
					title:'KML Sample', 
					tabBarHidden:true
			});
					
	tab1.open(win,{animated:true});
});

// create tab group

tabGroup.addTab(tab1);
tabGroup.open();
