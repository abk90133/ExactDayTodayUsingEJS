//jsversion6

const express = require("express");
const bodyparser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');

app.get("/", function(req, res){
  var today = new Date();
  var currentday = today.getDay();
  var day = "";

 switch(currentday) {
   case 0:
    day="Sunday";
    break;
   case 1:
    day="Monday";
    break;
   case 2:
    day="Tueday";
    break;
   case 3:
    day="Wednesday";
    break;
    case 4:
     day="Thursday";
     break;
    case 5:
     day="Friday";
     break;
    case 6:
     day="Saturday";
     break;
    default:
    console.log("Error: Current Day is :" + currentday);
 }
  res.render("lists", {kindofDay: day});

});



app.listen(3201, function(){
  console.log("Server started on port 3201");
});
