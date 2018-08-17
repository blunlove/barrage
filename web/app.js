let board = $('.main-board');
let barrageInput = $('.main-barrage>input');
function getRandom(begin, end) {
  return Math.floor(Math.random() * (end - begin + 1) + begin);
}
function addBarrage() {
  if (barrageInput.val()) {
    let barrageDom = $('<div class="main-board-barrage"></div>').text(barrageInput.val());
    barrageInput.val('');
    let tempNode = barrageDom.appendTo(board);
    let effective = board.height() - tempNode.height();
    let top = getRandom(0, effective)
    let right = -tempNode.width();
    let speed = getRandom(2000, 5000);
    let color = `rgb(${getRandom(0, 255)}, ${getRandom(0, 255)}, ${getRandom(0, 255)})`;
    tempNode.css({top, right, color}).animate({right: "100%"}, speed, 'linear', function() {
      tempNode.remove();
    });
  }
}
barrageInput.on('keydown', function(event) {
  event.key == 'Enter' ? addBarrage() : null;
});
$('.main-button').on('click', function(event) {
  if (event.target.classList.contains('main-button-launch')) {
    addBarrage();
  }
  if (event.target.classList.contains('main-button-clear')) {
    board.empty();
  }
});