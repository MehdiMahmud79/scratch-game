/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Start", "./Stage/costumes/Start.png", { x: 480, y: 360 }),
      new Costume("Gover", "./Stage/costumes/Gover.png", { x: 480, y: 360 })
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];

    this.vars.myVariable = 0;
    this.vars.score = 9;
    this.vars.lives = 5;
    this.vars.level = 2;

    this.watchers.score = new Watcher({
      label: "Score",
      style: "normal",
      visible: true,
      value: () => this.vars.score,
      x: 415,
      y: 176
    });
    this.watchers.lives = new Watcher({
      label: "Lives",
      style: "normal",
      visible: true,
      value: () => this.vars.lives,
      x: 302,
      y: 175
    });
    this.watchers.level = new Watcher({
      label: "Level",
      style: "normal",
      visible: true,
      value: () => this.vars.level,
      x: 530,
      y: 176
    });
  }

  *whenGreenFlagClicked() {
    /* TODO: Implement looks_switchbackdroptoandwait */ null;
  }
}
