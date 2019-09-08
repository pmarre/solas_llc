let orange = 'rgba(242, 113, 39, .9)';
let red = 'rgba(166, 36, 36, .9)';
let green = 'rgba(20, 140, 96, .9)';
let gold = 'rgba(242, 213, 187, .9)';
let dark_orange = 'rgba(191, 99, 65, .9)';
let yellow = 'rgba(242, 190, 34, .9)';
let light_green = 'rgba(140, 191, 126, .9)';

$(document).ready(function() {
  onMouseEnter($('.grid-item'));
});

function onMouseEnter(e) {
  e.hover(
    function() {
      let id = this.id;

      if (id == 'orange') {
        $(this).css('background-color', orange);
        mouseIn($(this));
      }
      if (id == 'red') {
        $(this).css('background-color', red);
        mouseIn($(this));
      }
      if (id == 'green') {
        $(this).css('background-color', green);
        mouseIn($(this));
      }
      if (id == 'gold') {
        $(this).css('background-color', gold);
        mouseIn($(this));
      }
      if (id == 'dark_orange') {
        $(this).css('background-color', dark_orange);
        mouseIn($(this));
      }
      if (id == 'yellow') {
        $(this).css('background-color', yellow);
        mouseIn($(this));
      }
      if (id == 'light_green') {
        $(this).css('background-color', light_green);
        mouseIn($(this));
      }
    },
    function() {
      resetHoverBackground($(this));
      mouseOut($(this));
    }
  );
}

function resetHoverBackground(e) {
  e.css('background-color', 'rgba(0, 0, 0, 0)');
}

function mouseIn(e) {
  e.find('h3').css('display', 'none');
  e.find('.hover-detail').css('display', 'block');
}

function mouseOut(e) {
  e.find('h3').css('display', 'block');
  e.find('.hover-detail').css('display', 'none');
}
