(function() {
 
  "use strict";
 
  var toggles = document.querySelectorAll(".c-hamburger");
 
  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };
 
  function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
      e.preventDefault();
      (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
    });
  }
 
})();

function openMenu() {
    document.getElementById("sidebar").classList.toggle("active");
};

function closeMenu() {
    document.getElementById("sidebar0").click();
};

//$('.close').click(function() {
//	$('#sidebar0').click();
//});

//$('#sidebar0').click(function(){
//	$('#sidebar').slideDown();
//});