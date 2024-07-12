export default function Menu(){
  document.getElementById('menu-toggle').addEventListener('click', function() {
    document.querySelector('.menu').classList.toggle('nav-open');
    document.getElementById('menu-toggle').classList.toggle('rotated')
  });
}
