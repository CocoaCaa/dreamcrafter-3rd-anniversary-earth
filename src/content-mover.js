export function start() {
  const content = document.querySelector('#content');

  window.addEventListener('mousemove', (ev) => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const xPerc = -((ev.clientY - windowHeight / 2) / (windowHeight / 2));
    const yPerc = (ev.clientX - windowWidth / 2) / (windowWidth / 2);
    content.style.transform = `rotateX(${xPerc * 7}deg) rotateY(${yPerc * 10}deg)`;
  });
}