import '../scss/style.scss';

function clearLoader(isLoaded) {
  if (isLoaded) {
    setTimeout(() => {
      document.querySelector('body').classList.add('loaded');
    }, 2200);
  }
}

let index = 0;
function typeWriter() {
  const txt = 'Welcome';
  const speed = 300;
  if (index < txt.length) {
    document.getElementById('typeWriter').innerHTML += txt.charAt(index);
    document.getElementById('lineExtend').style.width = (20 + (15 * index)) + 'px';
    index++;
    setTimeout(typeWriter, speed);
  }
  return true;
};

window.addEventListener('DOMContentLoaded', () => {
  clearLoader(typeWriter());
  document.querySelector('html').style.opacity = '1';
  document.querySelector('.toggle, .my-nav-bar').addEventListener('click', () => {
    document.querySelector('.my-navbar').classList.toggle('nav-is-open');
    document.querySelector('.toggle').classList.toggle('active');
  });
  const logo = document.querySelector('.logo img').getAttribute('data-src');
  document.querySelector('.logo img').setAttribute('src', logo);
  const imageHeader = document.querySelector('.image-header img').getAttribute('data-src');
  document.querySelector('.image-header img').setAttribute('src', imageHeader);
  const project1 = document.querySelector('.project1 img').getAttribute('data-src');
  document.querySelector('.project1 img').setAttribute('src', project1);
  const project2 = document.querySelector('.project2 img').getAttribute('data-src');
  document.querySelector('.project2 img').setAttribute('src', project2);
  const project3 = document.querySelector('.project3 img').getAttribute('data-src');
  document.querySelector('.project3 img').setAttribute('src', project3);
  
  window.addEventListener('scroll', () => {
    const scroll = window.scrollY;
    if (scroll > 0) {
      document.querySelector('.my-navbar').style.backgroundColor = 'rgba(0,0,0,.1)';
    };
  });
});
