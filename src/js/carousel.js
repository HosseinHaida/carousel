var slides, currentSlide, n, i, intervalFunc;

document.addEventListener("DOMContentLoaded", function() {
// Handler when the DOM is fully loaded
    slides = [
        'hh-slide-1',
        'hh-slide-2',
        'hh-slide-3',
        'hh-slide-4',
        'hh-slide-5'
    ];
    currentSlide = slides[0];
    n = slides.length;
    i = 0;
    
    autoSlide();
  });

  function slideIt(which) {
//  if user hit next:
    if (which === 1) {
      slideDirectionClass = 'slideLeft';
      i = i + 1;
      j = i - 1;
      k = i - 2;
      if (i === n) { i = 0 }
      if (j === -1) { j = n - 1 }
      if (k === -1) { k = n - 1 }
//  if user hit previous:
    } else {
      slideDirectionClass = 'slideRight';
      i = i - 1;
      j = i + 1;
      k = i + 2;
      if (i === -1) { i = n - 1 }
      if (j === n) { j = 0 }
      if (k === n) { k = 0 }
    }

    currentSlide = slides[i];
    previousSlide = slides[j];
    theOtherSlide = slides[k];
  
    currentSlideElmnt = document.getElementsByClassName(currentSlide);
    previousSlideElmnt = document.getElementsByClassName(previousSlide);
    theOtherSlideElmnt = document.getElementsByClassName(theOtherSlide);

    if(slideDirectionClass === 'slideRight') {
      previousSlideElmnt[0].classList.add('slideRightOut');
      currentSlideElmnt[0].classList.remove('slideLeftOut');
    } else if(slideDirectionClass === 'slideLeft') {
      previousSlideElmnt[0].classList.add('slideLeftOut');
      currentSlideElmnt[0].classList.remove('slideRightOut');
    }

    previousSlideElmnt[0].classList.remove('slideRight');
    previousSlideElmnt[0].classList.remove('slideLeft');
    
    theOtherSlideElmnt[0].classList.remove('slideRightOut');
    theOtherSlideElmnt[0].classList.remove('slideLeftOut');

    currentSlideElmnt[0].classList.add(slideDirectionClass);

    autoSlide();
  }

  function autoSlide() {
    clearInterval(intervalFunc);
    intervalFunc = setInterval(function() {
      slideIt(1)
    }, 6000)
  }