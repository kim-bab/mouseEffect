const scrollWrap = document.querySelector('.mouse-wrap');
const contents = document.querySelectorAll('.mouse-contents p span');
const cursor = document.querySelector('.cursor');

window.addEventListener('mousemove', (e) => {
  scrollWrap.innerHTML = `<div>clientX : <span class="clientX">${e.clientX}px</span></div>
  <div>clientY : <span class="clientY">${e.clientY}px</span></div>
  <div>offsetX : <span class="offsetX">${e.offsetX}px</span></div>
  <div>offsetY : <span class="offsetY">${e.offsetX}px</span></div>
  <div>pageX : <span class="pageX">${e.pageX}px</span></div>
  <div>pageY : <span class="pageY">${e.pageY}px</span></div>
  <div>screenX : <span class="screenX">${e.screenX}px</span></div>
  <div>screenY : <span class="screenY">${e.screenY}px</span></div>`;

    cursor.style.left = e.clientX - 25 + 'px';
    cursor.style.top = e.clientY - 25 + 'px';
})


//각각의 span을 나타낸다.
//각 span을 마우스 오버하면 순서에 맞게 커서인덱스가 활성화된다.
contents.forEach((items, index) => {
  items.addEventListener('mouseenter', () => {
    cursor.classList.add('cursor-active'+(index+1)+'');
  })

  items.addEventListener('mouseleave', () => {
    cursor.classList.remove('cursor-active'+(index+1)+'');
  })
})


const render = () => {
  scrollWrap.innerHTML = `<div>clientX : <span class="clientX">0px</span></div>
  <div>clientY : <span class="clientY">0px</span></div>
  <div>offsetX : <span class="offsetX">0px</span></div>
  <div>offsetY : <span class="offsetY">0px</span></div>
  <div>pageX : <span class="pageX">0px</span></div>
  <div>pageY : <span class="pageY">0px</span></div>
  <div>screenX : <span class="screenX">0px</span></div>
  <div>screenY : <span class="screenY">0px</span></div>`;
}

render();