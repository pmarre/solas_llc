const card = document.querySelectorAll('.card');
const aboutImage = document.querySelector('.ab-img');

var isInViewport = function(elem) {
  var bounding = elem.getBoundingClientRect();
  return (
    bounding.top >= 0 &&
    bounding.left >= 0 &&
    bounding.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    bounding.right <=
      (window.innerWidth || document.documentElement.clientWidth)
  );
};

window.addEventListener(
  'scroll',
  () => {
    var interval = 200;
    [...card].forEach((x, index) => {
      if (isInViewport(x)) {
        setTimeout(() => x.classList.add('start'), index * interval);
      }
    });
  },
  false
);

window.addEventListener(
  'scroll',
  () => {
    var childrenEl = document.querySelector('.heading-contain').children;

    var interval = 100;
    [...childrenEl].forEach((y, index) => {
      if (isInViewport(y)) {
        setTimeout(() => y.classList.add('animate'), index * interval);
      }
    });
  },
  false
);
