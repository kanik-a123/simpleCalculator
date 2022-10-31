var first = document.getElementById("first");
var last = document.getElementById("last");

var firstname, lastname;
const convert = (() => {
     firstname = parseInt(first.value);
     lastname = parseInt(last.value);
})



console.log(firstname, lastname)
var p = document.getElementById("para")
const additems = (() => {
    convert();
    //  console.log(first.value,last.value)
    // var firstname = parseInt(first.value);
    // var lastname = parseInt(last.value);
    // console.log(firstname + lastname);
    p.innerHTML = firstname + lastname

})
const subitems = (() => {
    convert();
    //  console.log(first.value,last.value)

    // console.log(firstname - lastname);
    p.innerHTML = firstname - lastname

})
const divitems = (() => {
    convert();
    //  console.log(first.value,last.value)
    // var firstname = parseInt(first.value);
    // var lastname = parseInt(last.value);
    // console.log(firstname / lastname);
    p.innerHTML = firstname / lastname

})
const clearitems = (() => {
    convert();
    //  console.log(first.value,last.value)
    // var firstname = parseInt(first.value);
    // var lastname = parseInt(last.value);
    // console.log(firstname * lastname);
    p.innerHTML = firstname * lastname

})
