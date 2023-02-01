const scrollWrap = document.querySelector('.mouse-wrap');
const contents = document.querySelectorAll('.mouse-contents p span');
const cursor = document.querySelector('.cursor');
const cursorFollow = document.querySelector('.cursor-follow');
const info = document.querySelectorAll('.info');


window.addEventListener('mousemove', (e) => {
  scrollWrap.innerHTML = `<div>pageX : <span class="pageX">${e.pageX}px</span></div>
  <div>pageY : <span class="pageY">${e.pageY}px</span></div>`;

    cursor.style.left = e.clientX - 5 + 'px';
    cursor.style.top = e.clientY - 5 + 'px';
    cursorFollow.style.left = e.clientX - 15 + 'px';
    cursorFollow.style.top = e.clientY - 15 + 'px';
})


//각각의 span을 나타낸다.
//각 span을 마우스 오버하면 순서에 맞게 커서인덱스가 활성화된다.

const render = () => {
  contents.forEach((items) => {
    items.addEventListener('mouseenter', () => {
      cursorFollow.classList.add('cursor-active');
        cursor.style.transform = 'scale(0)';
    })
  
    items.addEventListener('mouseleave', () => {
      cursorFollow.classList.remove('cursor-active');
      cursor.style.transform = 'scale(1)';
    })
  })


  info.forEach((items) => {
    items.addEventListener('mouseenter', () => {
      cursorFollow.classList.add('cursor-show');
      cursor.classList.add('cursor-show2');
    })
    items.addEventListener('mouseleave', () => {
      cursorFollow.classList.remove('cursor-show');
      cursor.classList.remove('cursor-show2');
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