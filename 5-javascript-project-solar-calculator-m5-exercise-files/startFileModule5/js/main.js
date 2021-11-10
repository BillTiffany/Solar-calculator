// JavaScript Document

// var foundYou = document.getElementById('overview')
// console.log(foundYou)
// console.log(foundYou.innerHTML)

// foundYou.innerHTML = ">>I changed you<<"


// var foundYou = document.getElementsByTagName('p')
// console.log(foundYou);
// console.log(foundYou[2].innerText)

// foundYou[1].innerHTML ="..I changed you"

// var foundYou = document.getElementsByName('first')
// console.log(foundYou[0].innerHTML)
// foundYou[0].innerHTML = "..I changed you"


var foundYou = document.getElementById('myForm');
console.log(foundYou);
var selectArray= foundYou.getElementsByTagName('input')
console.log(selectArray);

for(i=0; i<selectArray.length; i++){
    console.log(selectArray[i].value)
}

// childArray[0].innerHTML =">>These items"
// childArray[1].innerHTML =">>Have just"
// childArray[2].innerHTML =">>Been Changed"

// var newOptions = ['Orange', "red", "Blue"];

// var foundYou = document.getElementById('myForm');
// console.log(foundYou);

// var selectArray = foundYou.getElementsByTagName('option')
// console.log(selectArray);

// for (i=0; i<selectArray.length; i++) {
//     selectArray[i].innerHTML = newOptions[i]
// }