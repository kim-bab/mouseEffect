const scrollWrap = document.querySelector('.mouse-wrap');
const innerWrap = document.querySelector('.inner-wrap');
const ImgBox = document.querySelector('.img-box');
const cursor = document.querySelector('.cursor');
const info = document.querySelectorAll('.info');


window.addEventListener('mousemove', (e) => {
  scrollWrap.innerHTML = `<div>pageX : <span class="pageX">${e.pageX}px</span></div>
  <div>pageY : <span class="pageY">${e.pageY}px</span></div>`;

    cursor.style.left = e.clientX - 8 + 'px';
    cursor.style.top = e.clientY - 8 + 'px';

  })
  
  
  
  const render = () => {
    window.addEventListener('mousemove', (e) => {
      
      let pageX = e.pageX;
      let pageY = e.pageY;

      let standardX = window.innerWidth/2 - pageX;
      let standardY = window.innerHeight/2 - pageY;

      let maxX = Math.max(-350, Math.min(350, standardX));
      let maxY = Math.max(-350, Math.min(350, standardY));

      let angleX = maxX * 0.05;
      let angleY = maxY * 0.05;


      innerWrap.style.transform = `perspective(500px) rotateX(${angleY}deg) rotateY(${-angleX}deg)`;
      
  })
}

render();


const showPageInfo = () => {
  scrollWrap.innerHTML = `
  <div>pageX : <span class="pageX">0px</span></div>
  <div>pageY : <span class="pageY">0px</span></div>`;
}

showPageInfo();