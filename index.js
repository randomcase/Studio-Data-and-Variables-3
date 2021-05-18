// FORK this starter file and save it to your own Repl.it account.
let date = "Monday 2019 03-18";
let time = "10:05:34 AM";
let astronautCount = 7;
let astronautStatus = "ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg ;
let fuelMassKg = 760000 ;
let shuttleMassKg = 74842.31 ;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg ;
let fuelTempCelsius = -225 ;
let fuelLevel = 100;
let weatherStatus = "clear";
// Declare and initialize the 12 variables here:
let line = "-------------------------------------";
console.log(line);
console.log("> LC04 - LAUNCH CHECKLIST");
console.log(line);
console.log('Date: ' + date);
console.log('Time: ' + time);
console.log(line + '\n > ASTRONAUT INFO' + '\n' + line);
console.log('* count: ' + astronautCount);
console.log('* status: ' + astronautStatus);
console.log(line + '\n > FUEL DATA' + '\n' + line) 
console.log('* Fuel temp celsius: ' + fuelTempCelsius + ' C');
console.log('* Fuel level: ' + fuelLevel + '%');
console.log(line + '\n + > MASS DATA' + '\n' + line);
console.log('* Crew mass: ' + crewMassKg + ' kg');
console.log('* Fuel mass: ' + fuelMassKg + ' kg');
console.log('* Shuttle mass: ' + shuttleMassKg + ' kg');
console.log(line + '\n > FLIGHT PLAN + \n' + line);
console.log('* weather: ' + weatherStatus);
console.log(line + '\n > OVERALL STATUS \n' + line);
console.log('* Clear for takeoff: YES')




// Write code to generate the LC04 report here:




// When done, have your TA check your code.




// BONUS: Use readline-sync to prompt the user to enter the number of astronauts going on the mission.