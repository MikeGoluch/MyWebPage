import '../scss/style.scss'

$(window).on('load', () => {

  // // console.log('hi')
  // let isLoaded;
  typeWriter()
  setTimeout(() => {
    $('body').addClass('loaded');
    
  }, 1);

  // $('body').addClass('loaded');
});
function typeWriter() {
  let index = 0;
  let txt = 'Welcome';
  let speed = 300;
  setInterval(() => {
    if (index < txt.length) {
      document.getElementById('typeWriter').innerHTML += txt.charAt(index++);
      document.getElementById('lineExtend').style.width = (20 + (15 * index)) + 'px';
      // i++;
    }
  }, speed);
  return true
};


  
$(document).ready(function () {
  var largeDevices = false;
  if($(window).width() > 992) {
    largeDevices = true;
  }
  $(window).resize(function() {
    if($(window).width() > 992) {
        largeDevices = true;
    } else {
        largeDevices = false;
    }
  });
  $('.toggle, .my-navbar-nav').click(function() {
    // if (largeDevices) {
    //   $('.my-navbar').removeClass('nav-is-open');
    // } else {
      $('.my-navbar').toggleClass('nav-is-open');
      $('.toggle').toggleClass('active');
    // }
    });
    
    $(window).scroll(function(){
      var scroll = $(window).scrollTop();
      if (scroll > 0) {
        $('.my-navbar').css('background-color' , 'rgba(0,0,0,.1)');
      } else {
        $('.my-navbar').css('background-color' , 'rgba(0,0,0,.1)');  	
      }
    })

    // setTimeout(function(){
    //   $('body').addClass('loaded');
    // }, 5000);
    
    // let i = 0;
    // function typeWriter() {
    //   let txt = 'Welcome';
    //   let speed = 300;
    //   if (i < txt.length) {
    //     document.getElementById('typeWriter').innerHTML += txt.charAt(i);
    //     document.getElementById('lineExtend').style.width = (20 + (15 * i)) + 'px';
    //     i++;
    //     setTimeout(typeWriter,speed);
    //   }
    // };
    // setTimeout(typeWriter, 3000);
  }
);


