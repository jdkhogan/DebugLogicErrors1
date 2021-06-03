/* Your directions from superiors:

  Launch the shuttle only if the fuel, crew and computer all check out OK.
  If a check fails, print that information to the console and scrub the launch.
  If all checks are successful, print a countdown to launch in the console.
*/

// Run this sample code as-is and examine the output. 
// Should the shuttle have launched? 
// Did it?
// Do not worry about fixing the code yet, we will do that in the next series of exercises.

let launchReady = false;
let fuelLevel = 17000;
let crewStatus = true;
let computerStatus = 'green';
let fuelReady = false;
let crewAndComputerReady = false;

if (fuelLevel >= 20000) {
   console.log('Fuel level cleared.');
   fuelReady = true;
} else {
   console.log('WARNING: Insufficient fuel!');
}

if (crewStatus && computerStatus === 'green'){
   console.log('Crew & computer cleared.');
   crewAndComputerReady = true;
} else {
   console.log('WARNING: Crew or computer not ready!');
}

if (fuelReady && crewAndComputerReady) {
  launchReady = true;
}

if (launchReady) {
   console.log('10, 9, 8, 7, 6, 5, 4, 3, 2, 1...');
   console.log('Liftoff!');
} else {
   console.log('Launch scrubbed.');
}