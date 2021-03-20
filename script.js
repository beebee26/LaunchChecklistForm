// Write your JavaScript code here!
window.addEventListener("load", function() {
   
let randomPlanet = Math.floor(Math.random() * Math.floor(6));
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      response.json().then(function(json) {
         const missiontargetdiv = document.getElementById("missionTarget");
                        missiontargetdiv.innerHTML = `
                           <h2>Mission Destination</h2>
                              <ol>
                                 <li>Name: ${json[randomPlanet].name}</li>
                                 <li>Diameter: ${json[randomPlanet].diameter}</li>
                                 <li>Star: ${json[randomPlanet].star}</li>
                                 <li>Distance from Earth: ${json[randomPlanet].distance}</li>
                                 <li>Number of Moons: ${json[randomPlanet].moons}</li>
                              </ol><img src="${json[randomPlanet].image}">`;
      });
   });
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      let pilot = document.getElementById('pilotName');
      let copilot = document.getElementById('copilotName');
      let fuel = document.getElementById('fuelLevel');
      let cargo = document.getElementById('cargoMass');
      let faulty = document.getElementById('faultyItems');
      let pstatus = document.getElementById('pilotStatus');
      let cpstatus = document.getElementById('copilotStatus');
      let stat = document.getElementById('launchStatus');
      let fstat = document.getElementById('fuelStatus');
      let cstat = document.getElementById('cargoStatus');

      console.log(cargo);
      let regex=/^[a-zA-Z ]+$/;
      let regex2=/^[00-9]+$/;
      if ( !pilot.value.match(regex) || !copilot.value.match(regex) || !fuel.value.match(regex2) || !cargo.value.match(regex2)) {
         if ( !pilot.value.match(regex) || !copilot.value.match(regex)) {
            alert("Please enter valid name for pilot and copilot!");
            //stop the form submission
            event.preventDefault();
         }
         if ( !fuel.value.match(regex2) || !cargo.value.match(regex2)) {
            alert("Please enter a numerical value for fuel and cargo!");
            //stop the form submission
            event.preventDefault();
         }
      }
      else if (fuel.value < 10000 || cargo.value > 10000){
         pstatus.innerHTML = `${pilot.value}`;
         cpstatus.innerHTML = `${copilot.value}`;
         stat.innerHTML = "Shuttle not ready for launch";
         stat.style.color="red";
         faulty.style.visibility="visible";
         if (fuel.value < 10000){
            fstat.innerHTML   =  "Fuel level low. There is not enough fuel for the journey!";
         }
         if (cargo.value > 10000){
            cstat.innerHTML   =  "There is too much mass for the shuttle to take off!";
         }
         //stop the form submission
         event.preventDefault();
      }
      else {
         stat.style.color="green";
         stat.innerHTML = "Shuttle is ready for launch";
         faulty.style.visibility="hidden";
         //stop the form submission
         event.preventDefault();
      }
   });
});
/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
