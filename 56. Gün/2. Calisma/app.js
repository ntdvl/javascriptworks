document.getElementById("test").addEventListener("click", function( cee ) {
    // display the current click count inside the clicked div
    cee.target.textContent = "click count: " + cee.detail;
  }, false);