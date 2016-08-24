var express = require('express');
var async = require('async');
var request = require("request");




var app = express();

//set up ports based on env
app.set('port', (process.env.PORT || 3000));
app.get("/", function(req, res){

  var array = [
{"title": "Mellben Seafood (Ang Mo Kio)", "url": "http://www.burpple.com/melben-seafood-blk-232-ang-mo-kio-ave-3?bp_ref=%2Fcategories%2Fsg%2Fzi-char", "opening_hours": {"thursday:": ["04:30pm - 11:30pm"], "sunday:": ["04:30pm - 11:30pm"], "tuesday": ["04:30pm - 11:30pm"], "saturday:": ["04:30pm - 11:30pm"], "friday:": ["04:30pm - 11:30pm"], "wednesday:": ["04:30pm - 11:30pm"], "monday:": ["04:30pm - 11:30pm"]}, "contact_no": "+65 62856762", "postal_code": "560232", "address": "Block 232 Ang Mo Kio Avenue 3 #01-1222 Singapore 560232"},
{"title": "Potato Head Folk", "url": "http://www.burpple.com/potato-head-folk?bp_ref=%2Fcategories%2Fsg%2Fwestern", "opening_hours": {"thursday:": ["11:00am - 11:30pm"], "sunday:": ["11:00am - 11:30pm"], "tuesday": ["11:00am - 11:30pm"], "saturday:": ["11:00am - 11:30pm"], "friday:": ["11:00am - 11:30pm"], "wednesday:": ["11:00am - 11:30pm"], "monday:": ["closed"]}, "contact_no": "+65 63271939", "postal_code": "089143", "address": "36 Keong Saik Road Singapore  089143"},
{"title": "Oriole Coffee + Bar (Somerset)", "url": "http://www.burpple.com/oriole-cafe-bar?bp_ref=%2Fcategories%2Fsg%2Fwestern", "opening_hours": {"thursday:": ["08:00am - 11:00pm"], "sunday:": ["08:00am - 11:00pm"], "tuesday": ["08:00am - 11:00pm"], "saturday:": ["08:00am - 12:00am"], "friday:": ["08:00am - 12:00am"], "wednesday:": ["08:00am - 11:00pm"], "monday:": ["08:00am - 11:00pm"]}, "contact_no": "+65 62388348", "postal_code": "238163", "address": "96 Somerset Road #01-01 Pan Pacific Serviced Suites Singapore 238163"},
{"title": "136 Hong Kong Street Fish Head Steamboat (Clementi)", "url": "http://www.burpple.com/136-hongkong-st-fish-head-steamboat?bp_ref=%2Fcategories%2Fsg%2Fsteamboat", "opening_hours": {"thursday:": ["05:00pm - 10:45pm", "11:00am - 02:00pm"], "sunday:": ["05:00pm - 10:45pm", "11:00am - 02:00pm"], "tuesday": ["05:00pm - 10:45pm", "11:00am - 02:00pm"], "saturday:": ["05:00pm - 10:45pm", "11:00am - 02:00pm"], "friday:": ["05:00pm - 10:45pm", "11:00am - 02:00pm"], "wednesday:": ["05:00pm - 10:45pm", "11:00am - 02:00pm"], "monday:": ["05:00pm - 10:45pm", "11:00am - 02:00pm"]}, "contact_no": "+65 94378260", "postal_code": "120713", "address": "713 Clementi West Street 2 Singapore 120713"},
{"title": "Soon Huat Bak Kut Teh   (Jalan Kayu)", "url": "http://www.burpple.com/new-soon-huat-bak-kut-teh?bp_ref=%2Fcategories%2Fsg%2Fbak-kut-teh", "opening_hours": {"thursday:": ["10:00am - 10:00pm"], "sunday:": ["10:00am - 10:00pm"], "tuesday": ["10:00am - 10:00pm"], "saturday:": ["10:00am - 10:00pm"], "friday:": ["10:00am - 10:00pm"], "wednesday:": ["10:00am - 10:00pm"], "monday:": ["10:00am - 10:00pm"]}, "contact_no": "+65 64843454", "postal_code": "799458", "address": "257 Jalan Kayu Singapore 799458"},
{"title": "Thai Gold Food", "url": "http://www.burpple.com/gold-food-thai-chinese-cuisine?bp_ref=%2Fneighbourhoods%2Fsg%2Fbencoolen", "opening_hours": {"thursday:": ["05:00pm - 10:30pm", "11:30am - 03:30pm"], "sunday:": ["05:00pm - 10:30pm", "11:30am - 03:30pm"], "tuesday": ["05:00pm - 10:30pm", "11:30am - 03:30pm"], "saturday:": ["05:00pm - 10:30pm", "11:30am - 03:30pm"], "friday:": ["05:00pm - 10:30pm", "11:30am - 03:30pm"], "wednesday:": ["05:00pm - 10:30pm", "11:30am - 03:30pm"], "monday:": ["05:00pm - 10:30pm", "11:30am - 03:30pm"]}, "contact_no": "+65 68831575", "postal_code": "189652", "address": "91 Bencoolen Street #01-14 Sunshine Plaza Singapore 189652"},
{"title": "Tom Yum Kungfu (Boat Quay)", "url": "http://www.burpple.com/tom-yum-kungfu?bp_ref=%2Fcategories%2Fsg%2Fsteamboat", "opening_hours": {"thursday:": ["06:00pm - 10:30pm", "11:30am - 02:30pm"], "sunday:": ["06:00pm - 10:30pm"], "tuesday": ["06:00pm - 10:30pm", "11:30am - 02:30pm"], "saturday:": ["06:00pm - 10:30pm"], "friday:": ["06:00pm - 10:30pm", "11:30am - 02:30pm"], "wednesday:": ["06:00pm - 10:30pm", "11:30am - 02:30pm"], "monday:": ["06:00pm - 10:30pm", "11:30am - 02:30pm"]}, "contact_no": "+65 65361646", "postal_code": "049372", "address": "16 Circular Road Singapore 049372"},
{"title": "The BetterField", "url": "http://www.burpple.com/the-betterfield?bp_ref=%2Fneighbourhoods%2Fsg%2Fclarke-quay", "opening_hours": {"thursday:": ["08:00am - 11:00pm"], "sunday:": ["08:00am - 11:00pm"], "tuesday": ["08:00am - 11:00pm"], "saturday:": ["08:00am - 11:00pm"], "friday:": ["08:00am - 11:00pm"], "wednesday:": ["08:00am - 11:00pm"], "monday:": ["08:00am - 11:00pm"]}, "contact_no": "+65 92335142", "postal_code": "179434", "address": "100 High Street #01-03 The Treasury Singapore 179434"},
{"title": "Strangers' Reunion", "url": "http://www.burpple.com/strangers-reunion?bp_ref=%2Fneighbourhoods%2Fsg%2Foutram-park", "opening_hours": {"thursday:": ["09:00am - 10:00pm"], "sunday:": ["09:00am - 10:00pm"], "tuesday": [], "saturday:": ["09:00am - 12:00am"], "friday:": ["09:00am - 12:00am"], "wednesday:": ["09:00am - 10:00pm"], "monday:": ["09:00am - 10:00pm"]}, "contact_no": "+65 62224869", "postal_code": "169356", "address": "33/35/37 Kampong Bahru Road Singapore 169356"},
{"title": "The Chop House (VivoCity)", "url": "http://www.burpple.com/the-chop-house?bp_ref=%2Fcategories%2Fsg%2Fsteak", "opening_hours": {"thursday:": ["11:30am - 10:00pm"], "sunday:": ["11:00am - 10:00pm"], "tuesday": ["11:30am - 10:00pm"], "saturday:": ["11:30am - 10:00pm"], "friday:": ["11:30am - 10:00pm"], "wednesday:": ["11:30am - 10:00pm"], "monday:": ["11:30am - 10:00pm"]}, "contact_no": "+65 63769262", "postal_code": "095858", "address": "1 Harbourfront Walk #01-161/162 VivoCity Singapore 095858"},
{"title": "UsQuBa - Scottish Restaurant & Bar", "url": "http://www.burpple.com/usquba-scottish-restaurant-bar?bp_ref=%2Fcategories%2Fsg%2Fsteak", "opening_hours": {"thursday:": ["11:30am - 12:00am"], "sunday:": ["11:00am - 10:30pm"], "tuesday": ["11:30am - 12:00am"], "saturday:": ["11:30am - 01:00am"], "friday:": ["11:30am - 01:00am"], "wednesday:": ["11:30am - 12:00am"], "monday:": ["11:30am - 12:00am"]}, "contact_no": "+65 87236378", "postal_code": "049213", "address": "1 Fullerton Road #02-03 Singapore 049213"},
{"title": "Sufi's Corner", "url": "http://www.burpple.com/sufis-corner-singapore?bp_ref=%2Fcategories%2Fsg%2Fturkish", "opening_hours": {"thursday:": ["12:00pm - 11:00pm"], "sunday:": ["12:00pm - 11:00pm"], "tuesday": ["12:00pm - 11:00pm"], "saturday:": ["12:00pm - 11:00pm"], "friday:": ["12:00pm - 11:00pm"], "wednesday:": ["12:00pm - 11:00pm"], "monday:": ["12:00pm - 11:00pm"]}, "contact_no": "+65 62981196", "postal_code": "199747", "address": "56 Arab Street Singapore 199747"},
{"title": "Borshch Steakhouse", "url": "http://www.burpple.com/borshch-steakhouse?bp_ref=%2Fcategories%2Fsg%2Frussian", "opening_hours": {"thursday:": ["06:00pm - 10:00pm", "11:00am - 03:00pm"], "sunday:": ["06:00pm - 10:00pm", "11:00am - 03:00pm"], "tuesday": ["06:00pm - 10:00pm", "11:00am - 03:00pm"], "saturday:": ["06:00pm - 10:00pm", "11:00am - 03:00pm"], "friday:": ["06:00pm - 10:00pm", "11:00am - 03:00pm"], "wednesday:": ["06:00pm - 10:00pm", "11:00am - 03:00pm"], "monday:": ["06:00pm - 10:00pm", "11:00am - 03:00pm"]}, "contact_no": "+65 6280 4351", "postal_code": "555954", "address": "58 Serangoon Gardens Way Singapore 555954"},
{"title": "FOC Restaurant", "url": "http://www.burpple.com/foc-by-nandu-jubany?bp_ref=%2Fcategories%2Fsg%2Fspanish", "opening_hours": {"thursday:": ["12:00pm - 12:00am"], "sunday:": ["closed"], "tuesday": ["12:00pm - 12:00am"], "saturday:": ["12:00pm - 12:00am"], "friday:": ["12:00pm - 12:00am"], "wednesday:": ["12:00pm - 12:00am"], "monday:": ["12:00pm - 12:00am"]}, "contact_no": "+65 61004040", "postal_code": "059679", "address": "40 Hongkong Street Singapore 059679"},
{"title": "BUYAN Russian Restaurant and Caviar Bar", "url": "http://www.burpple.com/buyan-russian-haute-cuisine-caviar-bar?bp_ref=%2Fcategories%2Fsg%2Frussian", "opening_hours": {"thursday:": ["06:00pm - 10:30pm", "12:00pm - 03:00pm"], "sunday:": ["closed"], "tuesday": ["06:00pm - 10:30pm", "12:00pm - 03:00pm"], "saturday:": ["06:00pm - 10:30pm"], "friday:": ["06:00pm - 10:30pm", "12:00pm - 03:00pm"], "wednesday:": ["06:00pm - 10:30pm", "12:00pm - 03:00pm"], "monday:": ["06:00pm - 10:30pm"]}, "contact_no": "+65 6223 7008", "postal_code": "089593", "address": "9 Duxton Hill Singapore 089593"},
{"title": "Russkiy Dome", "url": "http://www.burpple.com/russkiy-dome?bp_ref=%2Fcategories%2Fsg%2Frussian", "opening_hours": {"thursday:": ["12:00pm - 10:00pm"], "sunday:": ["02:00pm - 10:00pm"], "tuesday": ["12:00pm - 10:00pm"], "saturday:": ["12:00pm - 10:00pm"], "friday:": ["12:00pm - 10:00pm"], "wednesday:": ["12:00pm - 10:00pm"], "monday:": ["12:00pm - 10:00pm"]}, "contact_no": "+65 67740833", "postal_code": "117867", "address": "27 West Coast Highway #01-29 Singapore 117867"}
  ];

  var output = array.map(function(cat){
        var catBody = [];
        catBody = cat.url;

    return catBody;
  });

  var output2 = output.map(function (cat2) {
    var cat2Body;
        cat2Body = cat2.indexOf("sg%2F") + 5;
      var cat3 = cat2.substr(cat2Body);
    return cat3;

  });


  var index = 0;
  var output3 = array.map(function(obj){
    var objBody = {};
    objBody["name"] = obj.title;
      objBody["category"] = output2[index];
      objBody["postal"] = obj.postal_code;


        objBody["latLong"] = {};
       objBody["latLong"]["coordinates"] = [];
       objBody["latLong"]["type"] = "point";

      index++;
  return objBody;

  });


var index1 = 0;
  async.eachSeries(output3, function(code, callback) {

 var url = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + code.postal + '+Singapore&key=AIzaSyAC6yk_-cvrYiP_NO4l75OcVcJlRbdZ_Gw';
    request.get(url, function(error, response, body){
      var jsonBody = JSON.parse(body);
      var long = jsonBody.results[0].geometry.location.lng;
      var lat =  jsonBody.results[0].geometry.location.lat;


      var temp_array = [];

         temp_array.push(long, lat);
       output3[index1].latLong.coordinates = temp_array;

       index1++;
         callback(null);
    });

  }, function(err, result) {
      // if result is true then every file exists
        res.json(output3);
  });


});

app.listen(app.get('port'), function() {
  console.log('Express server running at localhost', app.get('port'));
});
