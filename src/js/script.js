// $(document).ready(function () {
//     $('.third-button').on('click', function () {
  
//       $('.animated-icon4').toggleClass('open');
//     });
//   });

  $(document).ready(function () {
    $('.toggle, .my-navbar-nav').click(function() {
      $('.my-navbar').toggleClass('nav-is-open');
      $('.toggle').toggleClass('active');
      });
      // window.addEventListener('load', function() {
      //   let loadScreen = document.getElementById('load-screen');
      //   document.body.removeChild(loadScreen);
      // });
      $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 0) {
          $('.my-navbar').css('background-color' , 'rgba(0,0,0,.7)');
        }
    
        else{
          $('.my-navbar').css('background-color' , 'rgba(0,0,0,1)');  	
        }
      })

      setTimeout(function(){
        $('body').addClass('loaded');
        // $('h1').css('color','#222222');
      }, 6000);
      
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
      }
      setTimeout(typeWriter, 3000);
    });


