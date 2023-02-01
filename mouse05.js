const scrollWrap = document.querySelector('.mouse-wrap');
const innerWrap = document.querySelector('.inner-wrap');
const ImgBox = document.querySelector('.img-box');
const cursor = document.querySelector('.cursor');
const info = document.querySelectorAll('.info');


window.addEventListener('mousemove', (e) => {
  scrollWrap.innerHTML = `<div>pageX : <span class="pageX">${e.pageX}px</span></div>
  <div>pageY : <span class="pageY">${e.pageY}px</span></div>`;

  })
  
  
  
  const render = () => {
    innerWrap.addEventListener('mousemove', (e) => {

      let pageX = e.pageX;
      let pageY = e.pageY;

      let standardX = window.innerWidth/2 - pageX;
      let standardY = window.innerHeight/2 - pageY;

      ImgBox.style.transform = `translate(${standardX/20}px, ${standardY/20}px)`;


      cursor.style.left = e.clientX - 10 + 'px';
      cursor.style.top = e.clientY - 10 + 'px';
      
  })
}

render();



const showPageInfo = () => {
  scrollWrap.innerHTML = `
  <div>pageX : <span class="pageX">0px</span></div>
  <div>pageY : <span class="pageY">0px</span></div>`;
}

showPageInfo();