// script.js - CÓDIGO CONSOLIDADO E CORRIGIDO

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
// OBS: Embora você tenha removido o ícone 'X' na versão desktop, mantemos o código para mobile.
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

// Adicionamos um check para evitar erros se o ícone não existir no HTML
if (menuIcon) {
    menuIcon.onclick = () => {
        menuIcon.classList.toggle('fa-xmark'); // Alterna entre o ícone de menu e 'X'
        navbar.classList.toggle('active'); // Mostra/Esconde a navegação no mobile
    };
}


// 4. Script para mostrar/esconder descrição da Ferramenta ao Clicar (CORRIGIDO)
document.querySelectorAll('.ferramenta-logo.toggle-desc').forEach(logo => {
    logo.addEventListener('click', () => {
        // Alterna a classe 'active' ao clicar
        // Esta é a classe que o CSS usa para mostrar a descrição
        logo.classList.toggle('active');

        // Opcional: Fechar outras descrições abertas ao abrir uma nova
        document.querySelectorAll('.ferramenta-logo.toggle-desc').forEach(otherLogo => {
            if (otherLogo !== logo && otherLogo.classList.contains('active')) {
                otherLogo.classList.remove('active');
            }
        });
    });
});