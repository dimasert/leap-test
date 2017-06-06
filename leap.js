//variables needes to use the SDK (leap and aws iot)
var Leap = require("leapjs")

//function to receive the x,y,z from the Leap
Leap.loop(function(frame){

  if(frame.hands.length > 0){
    console.log(frame.hands.length);
    var hand = frame.hands[0];

    var xVal = hand.direction[0];
    var yVal = hand.palmPosition[1];
    var zVal = hand.pitch();
    var handPosition = hand.grabStrength;

    //variable to print what is readed by the leap
    var jsonObject = {'xAxis' : xVal, 'yAxis' : yVal,
                    'zAxis' : zVal, 'handPosition' : handPosition}

  console.log(jsonObject);

  }

});
