// Get the button, and when the user clicks on it, execute myFunction
document.getElementById("myBtn","myBtn2").onclick = function() {myFunction()};

/* myFunction toggles between adding and removing the show class, which is used to hide and show the dropdown content */
function myFunction() {
  document.getElementById("myDropdown","myButton2").classList.toggle("show");
}
