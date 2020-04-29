// Our state
var medium = "";
var amountOfTime = "";
var blurb = "";

console.log("Hello")
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// function myFunction2() {
//   document.getElementById("myDropdown").classList.toggle("show");
// }


// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {

  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function setMedium(input){
  console.log(input)
  if(input !== ""){
    medium = input;
  }

  document.getElementById('dropbtn').innerHTML = "Baseball";
}

function setTime(input){
  console.log(input)
  if(input !== ""){
    amountOfTime = input;
  }
}

function setBlurb(input){
  console.log(input)
  if(input !== ""){
    blurb = input;
  }
}
