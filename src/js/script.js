
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
      if (largeDevices) {
        $('.my-navbar').removeClass('nav-is-open');
      } else {
        $('.my-navbar').toggleClass('nav-is-open');
        $('.toggle').toggleClass('active');
      }
      });
      
      $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 0) {
          $('.my-navbar').css('background-color' , 'rgba(0,0,0,.7)');
        } else {
          $('.my-navbar').css('background-color' , '#121214');  	
        }
      })

      setTimeout(function(){
        $('body').addClass('loaded');
      }, 5000);
      
      let i = 0;
      function typeWriter() {
        let txt = 'Welcome';
        let speed = 300;
        if (i < txt.length) {
          document.getElementById('typeWriter').innerHTML += txt.charAt(i);
          document.getElementById('lineExtend').style.width = (20 + (15 * i)) + 'px';
          i++;
          setTimeout(typeWriter,speed);
        }
      };
      setTimeout(typeWriter, 3000);
    });


