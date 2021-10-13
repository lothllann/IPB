const botaoAbrir = document.querySelector('[data-modal="abrir"]');
const botaoFechar = document.querySelector('[data-modal="fechar"]');
const containerModal = document.querySelector('[data-modal="container"]');
const btnSend = document.querySelector('[data-modal="enviar"]');



function enviar() {
    preventDefault();
}

function toggleModal(event) {
    event.preventDefault();
    containerModal.classList.toggle('ativo');
}

function cliqueForaModal(event) {
    if (event.target === this) {
        toggleModal(event);
    }
}

botaoAbrir.addEventListener('click', toggleModal);
botaoFechar.addEventListener('click', toggleModal);
containerModal.addEventListener('click', cliqueForaModal);
btnSend.addEventListener('click', enviar);



/*---------------------------------------------------------------------------------------------------------------
 */


const menu = document.querySelector('[data-menu="scroll"]');


const scrolled = window.innerHeight * 0.2;

function showMenu() {


    if (scrolled > 0)
        menu.classList.add('menu_ativo');
    else
        menu.classList.remove('menu_ativo');

}



window.addEventListener('scroll', showMenu);

/*---------------------------------------------------------------------------------------------------------------
 */

// const logo_preto = document.querySelector('[data-menu="lp"]');
// const logo_roxo = document.querySelector('[data-menu="lr"]');

// function toggleMenu(event) {
//     event.preventDefault();
//     logo_preto.classList.toggle('ativo');
//     logo_roxo.classList.toggle('ativo');

// }

// logo_preto.addEventListener('mouseover', toggleMenu);
// logo_roxo.addEventListener('mouseup', 'mousedown', toggleMenu);