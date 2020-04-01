import '../scss/style.scss';

function test(isLoaded) {
  if (isLoaded) {
    setTimeout(() => {
      $('body').addClass('loaded');

    }, 2200)
  }
}
let index = 0;
async function typeWriter() {
  let txt = 'Welcome';
  let speed = 300;
  if (index < txt.length) {
    document.getElementById('typeWriter').innerHTML += txt.charAt(index);
    document.getElementById('lineExtend').style.width = (20 + (15 * index)) + 'px';
    index++;
    setTimeout(typeWriter, speed);
  }
  return true
};


  
$(document).ready(function () {
  typeWriter().then((isLoaded) => test(isLoaded));
  $('.toggle, .my-navbar-nav').click(function() {
      $('.my-navbar').toggleClass('nav-is-open');
      $('.toggle').toggleClass('active');
    });
    
    $(window).scroll(function(){
      var scroll = $(window).scrollTop();
      if (scroll > 0) {
        $('.my-navbar').css('background-color' , 'rgba(0,0,0,.1)');
      } else {
        $('.my-navbar').css('background-color' , 'rgba(0,0,0,.1)');  	
      }
    })
  }
);


