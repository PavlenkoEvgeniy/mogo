/*  Accordion for 'What we do' section */
let buttonToggle = document.querySelectorAll('.what-we-do__button-toggle');
let wedoTitle = document.querySelectorAll('.what-we-do__title');

// Toggle open/close element of accordion by pressing button
buttonToggle.forEach(function (buttonToggle) {
  buttonToggle.addEventListener('click', function() {

    // Closing all elements
    let title = document.querySelectorAll('.what-we-do__title');
    title.forEach(function (title) {
      if (!title.classList.contains('what-we-do__title--closed')){
        title.classList.add('what-we-do__title--closed')
      }
    });

    //Opening current element
    let parentElem = this.parentNode;
    let contentBlock = parentElem.querySelector('.what-we-do__title');
    if(contentBlock.classList.contains('what-we-do__title--closed')) {
    contentBlock.classList.remove('what-we-do__title--closed');
    }
    else {
      contentBlock.classList.add('what-we-do__title--closed');
    }

  });
});

// Toggle open/close element of accordion by pressing title element
wedoTitle.forEach(function (wedoTitle) {
  wedoTitle.addEventListener('click', function() {

    // Closing all elements
    let title = document.querySelectorAll('.what-we-do__title');
    title.forEach(function (title) {
      if (!title.classList.contains('what-we-do__title--closed')){
        title.classList.add('what-we-do__title--closed')
      }
    });

    //Opening current element
    let parentElem = this.parentNode;
    let contentBlock = parentElem.querySelector('.what-we-do__title');
    if(contentBlock.classList.contains('what-we-do__title--closed')) {
    contentBlock.classList.remove('what-we-do__title--closed');
    }
    else {
      contentBlock.classList.add('what-we-do__title--closed');
    }
    
  });
});
