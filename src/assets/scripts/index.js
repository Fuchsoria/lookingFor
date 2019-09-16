'use strict';

class Burger {
  constructor(burgerBlock, hiddenBlock, openedClass) {
    this.burgerBlock = document.querySelector(burgerBlock);
    this.hiddenBlock = document.querySelector(hiddenBlock);
    this.openedClass = openedClass;

    this.toggle = this.toggle.bind(this);
    this.handler();
  }

  handler() {
    this.burgerBlock.addEventListener('click', this.toggle);
  }

  toggle() {
    this.hiddenBlock.classList.toggle(this.openedClass);
  }
}

const mainBurger = new Burger('.nav__burger', '.nav__bar', 'nav__bar_opened');