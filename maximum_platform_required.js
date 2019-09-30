// 0000, 0001, 0002, 0003 ... 0059
// 0100, 0101, 0102, 0103 ... 0159
// 0200,                  ... 0259
// 2300,                  ... 2359

arr = [900, 940, 950, 1100, 1500, 1800]
dep = [910, 1200, 1120, 1130, 1900, 2000]

function getPlatFormsRequired (arr, dep) {
    var maxPlatforms = 0;
    var timeings = {};
    for (var i=0;i<arr.length; i++) {
        //console.log("Start : "+arr[i]+"; End : "+dep[i])
        for (var j=arr[i];j<=dep[i]; j++) {
            if (timeings[j]) {
                // console.log("Old Value : "+timeings[j])
                timeings[j]++
            } else {
                timeings[j] = 1;
            }
            
            maxPlatforms = Math.max(maxPlatforms, timeings[j]);
        }
    }

    return maxPlatforms;
} 

// console.log(timeings)
console.log("Max Platforms required :" + getPlatFormsRequired(arr, dep))