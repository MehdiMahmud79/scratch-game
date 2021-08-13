/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Cat extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("cat 2", "./Cat/costumes/cat 2.svg", { x: 87, y: 39 }),
      new Costume("cat 3", "./Cat/costumes/cat 3.svg", {
        x: 90.45120908077041,
        y: 40.27069409821959
      })
    ];

    this.sounds = [new Sound("Drive Around", "./Cat/sounds/Drive Around.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3)
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(0, -110);
    while (true) {
      yield* this.wait(0.1);
      this.costumeNumber += 1;
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (this.keyPressed("left arrow")) {
        this.x += -10;
      }
      if (this.keyPressed("right arrow")) {
        this.x += 10;
      }
      yield;
    }
  }

  *whenGreenFlagClicked3() {
    while (true) {
      yield* this.playSoundUntilDone("Drive Around");
      yield;
    }
  }
}
