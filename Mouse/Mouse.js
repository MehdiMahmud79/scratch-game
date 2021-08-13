/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Mouse extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("mouse1-a", "./Mouse/costumes/mouse1-a.svg", {
        x: 48.25846254612455,
        y: 30.7264319551947
      }),
      new Costume("mouse1-b", "./Mouse/costumes/mouse1-b.svg", { x: 65, y: 21 })
    ];

    this.sounds = [new Sound("pop", "./Mouse/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3)
    ];

    this.audioEffects.volume = 0;
  }

  *whenGreenFlagClicked() {
    this.stage.vars.score = 0;
    this.stage.vars.lives = 4;
    this.stage.vars.level = 2;
    while (true) {
      if (this.stage.vars.lives > 0) {
        this.visible = true;
        this.goto(this.random(-220, 220), 153);
        yield* this.glide(this.stage.vars.level, this.random(-220, 220), -152);
      } else {
        this.say("OOPS! Game Over !");
        this.stage.costume = "Gover";
      }
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (this.touching(this.sprites["Ball"].andClones())) {
        yield* this.startSound("pop");
        this.visible = false;
        this.stage.vars.score += 1;
        if (this.stage.vars.score % 7 == 1) {
          this.stage.vars.lives += 1;
        }
      }
      if (this.touching(this.sprites["Wall"].andClones())) {
        if (this.stage.vars.lives > 0) {
          this.stage.vars.lives += -1;
        } else {
          this.say("Opps! Game Over");
          this.visible = false;
        }
      }
      yield;
    }
  }

  *whenGreenFlagClicked3() {
    while (true) {
      yield* this.wait(0.1);
      this.costumeNumber += 1;
      yield;
    }
  }
}
