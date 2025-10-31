// 1. Script para a navegação sticky (fixa ao rolar)
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    // Adiciona uma classe 'scroll' no header quando a página rolar
    header.classList.toggle('scroll', window.scrollY > 0);
});


// 2. Script para scroll suave (se não usar CSS `scroll-behavior: smooth;`)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// 3. Script para o menu responsivo (ícone do 'X' na navegação)
// Você precisará adicionar um ícone de menu no HTML (como o 'X' na imagem)
// E alternar a classe 'active' da navegação ao clicar no ícone.
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark'); // Alterna entre o ícone de menu e 'X'
    navbar.classList.toggle('active'); // Mostra/Esconde a navegação no mobile
};