// Event Emitter
const { EventEmitter } = require("events");

const trafficLightsEventEmitter = new EventEmitter();

// on / emit

// Structuring data
const lights = [
  { color: "red", duration: 5000 },
  { color: "yellow", duration: 2000 },
  { color: "green", duration: 5000 },
]

let colorIdx = 0;
let counter = 3;

// Color Change
function changeColor() {
  const currentColor = lights[colorIdx].color;
  console.log(currentColor);
  trafficLightsEventEmitter.emit("colorChange", currentColor);
  colorIdx = (colorIdx + 1) % lights.length;
}

const interval = setInterval(changeColor, 5000);

trafficLightsEventEmitter.on("colorChange", (color) => {
  console.log(`Colour is ${color}`);
});
