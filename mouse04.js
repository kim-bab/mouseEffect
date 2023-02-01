const scrollWrap = document.querySelector('.mouse-wrap');
const contents = document.querySelectorAll('.mouse-contents p span');
const cursor = document.querySelector('.cursor');
const cursorFollow = document.querySelector('.cursor-follow');
const info = document.querySelectorAll('.info');


window.addEventListener('mousemove', (e) => {
  scrollWrap.innerHTML = `<div>pageX : <span class="pageX">${e.pageX}px</span></div>
  <div>pageY : <span class="pageY">${e.pageY}px</span></div>`;

    cursor.style.left = e.clientX - 100 + 'px';
    cursor.style.top = e.clientY - 100 + 'px';
})



const render = () => {
  contents.forEach((items) => {
    items.addEventListener('mouseenter', () => {
      cursor.classList.add('cursor-active');
    })
  
    items.addEventListener('mouseleave', () => {
      cursor.classList.remove('cursor-active');
    })
  })


  info.forEach((items) => {
    items.addEventListener('mouseenter', () => {
      cursor.classList.add('cursor-show');
    })
    items.addEventListener('mouseleave', () => {
      cursor.classList.remove('cursor-show');
    })
  })
}

render();



const showPageInfo = () => {
  scrollWrap.innerHTML = `
  <div>pageX : <span class="pageX">0px</span></div>
  <div>pageY : <span class="pageY">0px</span></div>`;
}

showPageInfo();