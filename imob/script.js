// Rolagem suave ao clicar nos links do menu
const links = document.querySelectorAll('header nav a');


links.forEach(link => {
link.addEventListener('click', function(e) {
e.preventDefault();
const target = document.querySelector(this.getAttribute('href'));
if (target) {
window.scrollTo({
top: target.offsetTop - 80,
behavior: 'smooth'
});
}
});
});