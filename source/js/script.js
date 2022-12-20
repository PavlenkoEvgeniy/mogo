/*  Accordion for 'What we do' section
------------------------------------------------------------------------*/
let buttonToggle = document.querySelectorAll('.what-we-do__button-toggle');
let wedoTitle = document.querySelectorAll('.what-we-do__title');

// Toggle open/close element of accordion by pressing button
buttonToggle.forEach(function (buttonToggle) {
  buttonToggle.addEventListener('click', function () {

    // Closing all elements
    let title = document.querySelectorAll('.what-we-do__title');
    title.forEach(function (title) {
      if (!title.classList.contains('what-we-do__title--closed')) {
        title.classList.add('what-we-do__title--closed')
      }
    });

    //Opening current element
    let parentElem = this.parentNode;
    let contentBlock = parentElem.querySelector('.what-we-do__title');
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
    let title = document.querySelectorAll('.what-we-do__title');
    title.forEach(function (title) {
      if (!title.classList.contains('what-we-do__title--closed')) {
        title.classList.add('what-we-do__title--closed')
      }
    });

    //Opening current element
    let parentElem = this.parentNode;
    let contentBlock = parentElem.querySelector('.what-we-do__title');
    if (contentBlock.classList.contains('what-we-do__title--closed')) {
      contentBlock.classList.remove('what-we-do__title--closed');
    } else {
      contentBlock.classList.add('what-we-do__title--closed');
    }

  });
});

/* Slider
-----------------------------------------------------------------------*/
let buttonSliderPrev = document.querySelector('.slider__button--prev-first-slider');
let buttonSliderNext = document.querySelector('.slider__button--next-first-slider');
let sliderItems = document.querySelectorAll('.slider__item--first-slider');

// Making move to the next slide
let nextSlide = function () {
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

        console.log('Slide forward');
        return;
      }
    }
  }
}

// Making move to the previous slide
let prevSlide = function () {
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

        console.log('Slide back');
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
let buttonSliderPrevSecond = document.querySelector('.slider__button--prev-second-slider');
let buttonSliderNextSecond = document.querySelector('.slider__button--next-second-slider');
let sliderItemsSecond = document.querySelectorAll('.slider__item--second-slider');

// Making move to the next slide
let nextSlideSecond = function () {
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

        console.log('Slide forward');
        return;
      }
    }
  }
}

// Making move to the previous slide
let prevSlideSecond = function () {
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

        console.log('Slide back');
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
