// Event Emitter
const { EventEmitter } = require("events");

const trafficLightsEventEmitter = new EventEmitter();

const lights = [
  { color: "red", duration: 5000 },
  { color: "yellow", duration: 2000 },
  { color: "green", duration: 5000 },
];

let colorIndex = 0;
let counter = 3;

// Color Change
function changeColor() {
  const currentColor = lights[colorIndex].color;
  console.log(currentColor);
  trafficLightsEventEmitter.emit("colorChange", currentColor);
  colorIndex = (colorIndex + 1) % lights.length;
}

const interval = setInterval(changeColor, 5000);

trafficLightsEventEmitter.on("colorChange", (color) => {
  console.log(`Colour is ${color}`);
});
