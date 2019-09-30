import e = require("cors");

var number = 9;
var j = 1;
var fingers;
var flag = 1;
for (var i=1;i<=number;i++) {
    console.log("Finger : "+j+"Number : "+ i);

    if (flag == 1)
    {
        j++;
    } else if (flag == -1) {
        j--;
    }

    if (j == 5) {
        j = j-1;
        flag = -1;
    }

    if (j == 1) {
        j = j+1;
        flag = 1;
    }
}