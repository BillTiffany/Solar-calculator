// JavaScript Document
function test () {
// alert("hello World from me");
console.log("hello world from bill")
}
// test();

function floor(diameter) {
 
    var radius = diameter/2;
    var floorArea = Math.PI * (radius * radius);
    return floorArea;
}

function walls(diameter, height){
    var radius = diameter/2;
    var circumference = 2 * Math.PI * radius;
    var wallArea = circumference * height;
    return wallArea;

}

function materialsNeeded(){


    var d = document.getElementById("across").value
    var h = document.getElementById("height").value
    var carpetNeeded = Math.ceil(floor(d));
    var paintNeeded = Math.ceil(walls(d, h));
    console.log('Carpet Needed is '+carpetNeeded+' sqFt');
    console.log('Paint needed is '+paintNeeded+' sqft');
}

// var i = 1; 
// while (i <=100){
//     i=i+2
//     console.log(i);
//     i=i-1
//     console.log(i);

// }

// for (i=100; i >=1; i=i-5){
//     console.log(i);
// }

// var elementId = document.getElementById('state');

// console.log(elementId);

// console.log(elementId.length);



// for (i=0; i < elementId.length; i++){
//     console.log(elementId[i].text);
//     console.log(elementId[i].value);
    
    
// }

function showStuff(el) {
    var elementId = document.getElementById(el);
    for (i=0; i<elementId.length; i++) {
        if (elementId[i].selected=== true){
            var x = elementId[i].text;
        }//end if
    }//end loop
    return x;
}//end function


function showMore(el){
    var elementId = document.getElementsByName(el);
    // console.log(elementId.length);
    var mycheck= "";
    for (i=0;i< elementId.length; i++){
        // console.log(elementId[i].checked)
        // console.log(elementId[i].value);
        if (elementId[i].checked===true){
            mycheck = mycheck + elementId[i].value +'<br>';
            }
        }
        return mycheck;
    }

function evaluatePage(){
    var feedbackState = showStuff("state");
    var feedbackHome = showStuff("home");
    var feedbackLight = showMore('bulb');
    document.getElementById("output").innerHTML = feedbackState +'<br>'+ feedbackHome + '<br>'+ feedbackLight;
}