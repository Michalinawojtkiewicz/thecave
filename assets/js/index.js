const toggleOverlay = (clickId, targetId) => {
  const clickElement = document.querySelector(clickId);
  const targetElement = document.querySelector(targetId);
  let initialScrollPosition = 0;
  clickElement.addEventListener('click', function(){
    if (targetElement.classList.contains('open')) {
      targetElement.scrollTop = initialScrollPosition;
      targetElement.classList.remove('open');
    } else {
      initialScrollPosition = targetElement.scrollTop;
      targetElement.classList.add('open');
      targetElement.scrollTop = 0;
    }
  });
  targetElement.addEventListener('click', function() {
    targetElement.scrollTop = initialScrollPosition;
    targetElement.classList.remove('open');
  });
}
toggleOverlay('#click-introduction', '#introduction');
toggleOverlay('#click-allegory', '#allegory');
toggleOverlay('#click-first', '#first');
toggleOverlay('#click-item-5', '#site-overlay');
toggleOverlay('#click-item-3', '#past-overlay'); 
toggleOverlay('#click-item-4', '#art-overlay'); 
document.querySelectorAll('.p, .white, .white1, .intro, .intro1, .intro2, .intro3, .past, .art, art1').forEach(function(element) {
  var text = element.innerHTML;
  var newText = text.replace(/([.,#!$%\^&\*;:{}=\-_`~()"'?])/g, '<span class="punctuation">$1</span>');
  element.innerHTML = newText;
});
const overlay = document.createElement('div');
overlay.classList.add('overlay');
document.body.appendChild(overlay);
document.addEventListener('DOMContentLoaded', function() {
  const circle = document.querySelector('.circle');
  document.addEventListener('mousemove', function(e) {
      const x = e.clientX;
      const y = e.clientY;
      circle.style.left = x - circle.offsetWidth / 2 + 'px'; 
      circle.style.top = y - circle.offsetHeight / 2 + 'px'; 
  });
  document.getElementById('hover-text').addEventListener('mouseenter', function() {
      circle.classList.add('hovered');
  });
  document.getElementById('hover-text').addEventListener('mouseleave', function() {
      circle.classList.remove('hovered');
  });
});
