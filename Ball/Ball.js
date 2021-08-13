/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Ball extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Ball/costumes/costume1.svg", {
        x: 11.5,
        y: 11.5
      })
    ];

    this.sounds = [new Sound("pop", "./Ball/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.moveBehind();
    this.goto(this.sprites["Cat"].x, this.sprites["Cat"].y);
    this.visible = false;
    while (true) {
      if (this.keyPressed("space")) {
        yield* this.startSound("pop");
        this.goto(this.sprites["Cat"].x, this.sprites["Cat"].y);
        this.visible = true;
        while (!this.touching(this.sprites[undefined].andClones())) {
          this.move(-20);
          yield;
        }
        this.goto(this.sprites["Cat"].x, this.sprites["Cat"].y);
        this.visible = false;
      }
      yield;
    }
  }
}
