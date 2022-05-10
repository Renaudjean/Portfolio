
let projectsOpen = document.getElementById("projectOpen");
let projectOverlay = document.getElementById("projectOverlay");
let closeOverlay = document.getElementById("closeoverlay");
let columnProject = document.querySelectorAll(".columnproject");

let competenceOpen = document.getElementById("competence-open");
let competenceOverlay = document.getElementById("competence-overlay");
let closeCompetence = document.getElementById("closecompetence");


console.log(projectsOpen);
console.log(columnProject);

projectsOpen.addEventListener("click", function() {
    projectsOverlay.classList.remove("hidden");
    for (const columnP of columnProject){
      console.log(columnP);

      columnP.classList.remove("hidden");
      }
  } )

closeOverlay.addEventListener("click", function() {
   
    projectsOverlay.classList.add("hidden");
     for (const columnP of columnProject){
      columnP.classList.add("hidden");
    }
  } )

competenceOpen.addEventListener("click", function() {
  competenceOverlay.classList.remove("hidden");
})

closecompetence.addEventListener("click", function() {
   
  competenceOverlay.classList.add("hidden");

})








var lFollowX = 0,
    lFollowY = 0,
    x = 0,
    y = 0,
    friction = 1 / 30;

function moveBackground() {
  x += (lFollowX - x) * friction;
  y += (lFollowY - y) * friction;
  
  translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';

  $('#bg').css({
    '-webit-transform': translate,
    '-moz-transform': translate,
    'transform': translate
  });
  
  $('#bg1').css({
    '-webit-transform': translate,
    '-moz-transform': translate,
    'transform': translate
  });

  window.requestAnimationFrame(moveBackground);
}

$(window).on('mousemove click', function(e) {

  var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
  var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
  lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
  lFollowY = (10 * lMouseY) / 100;

});

moveBackground();