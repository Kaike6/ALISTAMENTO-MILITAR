/* ===== MENU HAMBÚRGUER ===== */
const btnHamburguer = document.querySelector('.hamburguer');
const menuSub = document.querySelector('.sub');

btnHamburguer.addEventListener('click', () => {
    menuSub.classList.toggle('ativo');
});