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

new Burger('.nav__burger', '.nav__bar', 'nav__bar_opened');

class Popup {
  constructor(openButton, popupBlock, openedClass) {
    this.openButton = document.querySelector(openButton);
    this.popupBlock = document.querySelector(popupBlock);
    this.openedClass = openedClass;
    this.popupOpen = this.popupOpen.bind(this);
    this.popupClose = this.popupClose.bind(this);
    this.handler();
  }

  handler() {
    this.openButton.addEventListener('click', this.popupOpen);
  }

  addCloseHandler() {
    this.popupBlock.addEventListener('click', this.popupClose);
  }

  removeCloseHandler() {
    this.popupBlock.removeEventListener('click', this.popupClose);
  }

  popupOpen() {
    this.popupBlock.classList.add(this.openedClass);
    this.addCloseHandler();
  }

  popupClose(event) {
    if (event.target.classList.contains('popup')) {
      this.popupBlock.classList.remove(this.openedClass);
      this.removeCloseHandler();
    }
  }
}

new Popup('.nav__item_newcard', '.popup_newcard', 'popup_opened');