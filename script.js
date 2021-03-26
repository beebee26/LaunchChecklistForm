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
      event.preventDefault();

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
         }
         if ( !fuel.value.match(regex2) || !cargo.value.match(regex2)) {
            alert("Please enter a numerical value for fuel and cargo!");
         }
      }
      else if (fuel.value < 10000 || cargo.value > 10000){
         pstatus.innerHTML = `${pilot.value} is ready for launch.`;
         cpstatus.innerHTML = `${copilot.value} is ready for launch`;
         stat.innerHTML = "Shuttle not ready for launch";
         stat.style.color="red";
         faulty.style.visibility="visible";
         if (fuel.value < 10000){
            fstat.innerHTML   =  "Fuel level low. There is not enough fuel for the journey!";
         }
         else {
            fstat.innerHTML   =  "Fuel level high enough for launch";
         }
         if (cargo.value > 10000){
            cstat.innerHTML   =  "There is too much mass for the shuttle to take off!";
         }
         else {
            cstat.innerHTML   =  "Mass level low enough for launch!";
         }
      }
      else {
         stat.style.color = "green";
         stat.innerHTML = "Shuttle is ready for launch";
         cstat.innerHTML   =  "Mass level low enough for launch!";
         fstat.innerHTML   =  "Fuel level high enough for launch";
         faulty.style.visibility="visible";
      }
   });
});

