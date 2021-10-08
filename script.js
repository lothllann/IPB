const botaoAbrir = document.querySelector('[data-modal="abrir"]');
const botaoFechar = document.querySelector('[data-modal="fechar"]');
const containerModal = document.querySelector('[data-modal="container"]');
const btnSend = document.querySelector('[data-modal="enviar"]');

if (botaoAbrir && botaoFechar && containerModal && btnSend) {

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
}


const menu = document.querySelector('[data-menu="scroll"]');


const scrolled = window.innerHeight * 0.2;

function showMenu() {


    if (scrolled > 0)
        menu.classList.add('menu_ativo');
    else
        menu.classList.remove('menu_ativo');

}



window.addEventListener('scroll', showMenu);