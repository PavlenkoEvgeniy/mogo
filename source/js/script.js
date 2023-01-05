'use strict';

/*  Accordion for 'What we do' section
------------------------------------------------------------------------*/
const buttonToggle = document.querySelectorAll('.what-we-do__button-toggle');
const wedoTitle = document.querySelectorAll('.what-we-do__title');

// Toggle open/close element of accordion by pressing button
buttonToggle.forEach(function (buttonToggle) {
  buttonToggle.addEventListener('click', function () {

    // Closing all elements
    const title = document.querySelectorAll('.what-we-do__title');
    title.forEach(function (title) {
      if (!title.classList.contains('what-we-do__title--closed')) {
        title.classList.add('what-we-do__title--closed')
      }
    });

    //Opening current element
    const parentElem = this.parentNode;
    const contentBlock = parentElem.querySelector('.what-we-do__title');
    if (contentBlock.classList.contains('what-we-do__title--closed')) {
      contentBlock.classList.remove('what-we-do__title--closed');
    } else {
      contentBlock.classList.add('what-we-do__title--closed');
    }

  });
});

// Toggle open/close element of accordion by pressing title element
wedoTitle.forEach(function (wedoTitle) {
  wedoTitle.addEventListener('click', function () {

    // Closing all elements
    const title = document.querySelectorAll('.what-we-do__title');
    title.forEach(function (title) {
      if (!title.classList.contains('what-we-do__title--closed')) {
        title.classList.add('what-we-do__title--closed')
      }
    });

    //Opening current element
    const parentElem = this.parentNode;
    const contentBlock = parentElem.querySelector('.what-we-do__title');
    if (contentBlock.classList.contains('what-we-do__title--closed')) {
      contentBlock.classList.remove('what-we-do__title--closed');
    } else {
      contentBlock.classList.add('what-we-do__title--closed');
    }

  });
});

/* Slider
-----------------------------------------------------------------------*/
const buttonSliderPrev = document.querySelector('.slider__button--prev-first-slider');
const buttonSliderNext = document.querySelector('.slider__button--next-first-slider');
const sliderItems = document.querySelectorAll('.slider__item--first-slider');

// Making move to the next slide
const nextSlide = function () {
  for (let i = 0; i < sliderItems.length; i++) {

    // Checking if it is last slide or not
    if (i < sliderItems.length) {
      // If it is last slide make button disabled, if not last - continue
      if (i === sliderItems.length - 2) {
        buttonSliderNext.setAttribute('disabled', 'disabled');
      }
      // Continue
      if (sliderItems[i].classList.contains('slider__item--current')) {
        sliderItems[i].classList.remove('slider__item--current');
        sliderItems[i + 1].classList.add('slider__item--current');
        return;
      }
    }
  }
}

// Making move to the previous slide
const prevSlide = function () {
  for (let j = sliderItems.length -1; j > 0; j--) {

    // Checking if it is last slide or not
    if (j < sliderItems.length) {
      // If it is first slide make button disabled, if not first - continue
      if (j === 1) {
        buttonSliderPrev.setAttribute('disabled', 'disabled');
      }
      // Continue
      if (sliderItems[j].classList.contains('slider__item--current')) {
        sliderItems[j].classList.remove('slider__item--current');
        sliderItems[j - 1].classList.add('slider__item--current');
        return;
      }
    }
  }
}

//Event when pressing next button
buttonSliderNext.addEventListener('click', function () {
  nextSlide();
  buttonSliderPrev.removeAttribute('disabled');
});

//Event when pressing previous button
buttonSliderPrev.addEventListener('click', function () {
  prevSlide();
  buttonSliderNext.removeAttribute('disabled');
});

/* Second slider
------------------------------------------------------------------------*/
const buttonSliderPrevSecond = document.querySelector('.slider__button--prev-second-slider');
const buttonSliderNextSecond = document.querySelector('.slider__button--next-second-slider');
const sliderItemsSecond = document.querySelectorAll('.slider__item--second-slider');

// Making move to the next slide
const nextSlideSecond = function () {
  for (let i = 0; i < sliderItemsSecond.length; i++) {

    // Checking if it is last slide or not
    if (i < sliderItemsSecond.length) {
      // If it is last slide make button disabled, if not last - continue
      if (i === sliderItemsSecond.length - 2) {
        buttonSliderNextSecond.setAttribute('disabled', 'disabled');
      }
      // Continue
      if (sliderItemsSecond[i].classList.contains('slider__item--current')) {
        sliderItemsSecond[i].classList.remove('slider__item--current');
        sliderItemsSecond[i + 1].classList.add('slider__item--current');
        return;
      }
    }
  }
}

// Making move to the previous slide
const prevSlideSecond = function () {
  for (let j = sliderItemsSecond.length -1; j > 0; j--) {

    // Checking if it is last slide or not
    if (j < sliderItemsSecond.length) {
      // If it is first slide make button disabled, if not first - continue
      if (j === 1) {
        buttonSliderPrevSecond.setAttribute('disabled', 'disabled');
      }
      // Continue
      if (sliderItemsSecond[j].classList.contains('slider__item--current')) {
        sliderItemsSecond[j].classList.remove('slider__item--current');
        sliderItemsSecond[j - 1].classList.add('slider__item--current');
        return;
      }
    }
  }
}

//Event when pressing next button
buttonSliderNextSecond.addEventListener('click', function () {
  nextSlideSecond();
  buttonSliderPrevSecond.removeAttribute('disabled');
});

//Event when pressing previous button
buttonSliderPrevSecond.addEventListener('click', function () {
  prevSlideSecond();
  buttonSliderNextSecond.removeAttribute('disabled');
});
