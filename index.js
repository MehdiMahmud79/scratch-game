import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Ball from "./Ball/Ball.js";
import Cat from "./Cat/Cat.js";
import Mouse from "./Mouse/Mouse.js";
import Wall from "./Wall/Wall.js";
import Gover from "./Gover/Gover.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Ball: new Ball({
    x: -190,
    y: -110,
    direction: 180,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 1
  }),
  Cat: new Cat({
    x: -190,
    y: -110,
    direction: 0,
    costumeNumber: 2,
    size: 80,
    visible: true,
    layerOrder: 2
  }),
  Mouse: new Mouse({
    x: 38.28,
    y: -128.82,
    direction: 180.05349531049094,
    costumeNumber: 2,
    size: 50,
    visible: true,
    layerOrder: 3
  }),
  Wall: new Wall({
    x: -3,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 4
  }),
  Gover: new Gover({
    x: 6,
    y: 1,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 5
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
