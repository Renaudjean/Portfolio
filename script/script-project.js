let projectsOpen = document.getElementById("projectOpen");
let projectOverlay = document.getElementById("projectOverlay");
let closeOverlay = document.getElementById("closeoverlay");
let columnProject = document.querySelectorAll(".columnproject");

let competenceOpen = document.getElementById("competence-open");
let competenceOverlay = document.getElementById("competence-overlay");
let closeCompetence = document.getElementById("closecompetence");
let circles= document.querySelectorAll(".circles");
let level= document.querySelectorAll(".level");
let text= document.querySelectorAll(".text");
let percent= document.querySelectorAll(".percent");
let number= document.querySelectorAll(".number");
let skillCard= document.querySelectorAll(".card");
let paused= document.querySelectorAll(".paused");


// This function will make the overlay appear when clicking on the prompts
projectsOpen.addEventListener("click", function() {
    projectsOverlay.classList.remove("hidden");
    for (const columnP of columnProject){
      console.log(columnP);

      columnP.classList.remove("hidden");
      }
  } )

  competenceOpen.addEventListener("click", function() {
    competenceOverlay.classList.remove("hidden");
    for (const sc of skillCard){
      sc.classList.remove("hidden");
      }
    for (const c of circles){
      c.classList.remove("hidden");
      }
    for (const l of level){
      l.classList.remove("hidden");
      }
    for (const t of text){
      t.classList.remove("hidden");
      }
    for (const p of percent){
      p.classList.remove("hidden");
      }
    for (const n of number){
      n.classList.remove("hidden");
      }
    for (const p of paused){
      p.classList.remove("paused");
      }
  })


// This function will make the overlay disappear when clicking on the prompts
closeOverlay.addEventListener("click", function() {
   
    projectsOverlay.classList.add("hidden");
     for (const columnP of columnProject){
      columnP.classList.add("hidden");
    }
  } )


closecompetence.addEventListener("click", function() {
   
  competenceOverlay.classList.add("hidden");
  for (const sc of skillCard){
    sc.classList.add("hidden");
    }
  for (const c of circles){
    c.classList.add("hidden");
    }
  for (const l of level){
      l.classList.add("hidden");
    }
  for (const t of text){
      t.classList.add("hidden");
    }
    for (const p of percent){
      p.classList.add("hidden");
      }
    for (const n of number){
      n.classList.add("hidden");
      }
})

