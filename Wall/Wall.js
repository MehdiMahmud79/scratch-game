/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Wall extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Wall", "./Wall/costumes/Wall.svg", { x: 242, y: -175 })
    ];

    this.sounds = [new Sound("pop", "./Wall/sounds/pop.wav")];

    this.triggers = [];
  }
}
