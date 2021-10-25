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

const botaoVoltar = document.querySelector('[data-min="fechar"]');
const containerMin = document.querySelector('[data-min="container"]');
const btnAbrir = document.querySelector('[data-min="open"]');


function toggleMateria(event) {
    event.preventDefault();

    containerMin.classList.toggle('ativo');
}


function cliqueForaMin(event) {
    if (event.target === this) {
        toggleMateria(event);
    }
}

botaoVoltar.addEventListener('click', toggleMateria);
btnAbrir.addEventListener('click', toggleMateria);
containerMin.addEventListener('click', cliqueForaMin);


/*---------------------------------------------------------------------------------------------------------------
 */

const botaoVoltarC = document.querySelector('[data-conf="fechar"]');
const containerConf = document.querySelector('[data-conf="container"]');
const btnAbrirC = document.querySelector('[data-conf="open"]');


function toggleConf(event) {
    event.preventDefault();

    containerConf.classList.toggle('ativo');
}


function cliqueForaConf(event) {
    if (event.target === this) {
        toggleConf(event);
    }
}

botaoVoltarC.addEventListener('click', toggleConf);
btnAbrirC.addEventListener('click', toggleConf);
containerConf.addEventListener('click', cliqueForaConf);


/*---------------------------------------------------------------------------------------------------------------
 */

const botaoVoltarT = document.querySelector('[data-theo="fechar"]');
const containerTheo = document.querySelector('[data-theo="container"]');
const btnAbrirT = document.querySelector('[data-theo="open"]');


function toggleMateriaT(event) {
    event.preventDefault();

    containerTheo.classList.toggle('ativo');
}


function cliqueForaTheo(event) {
    if (event.target === this) {
        toggleMateriaT(event);
    }
}

botaoVoltarT.addEventListener('click', toggleMateriaT);
btnAbrirT.addEventListener('click', toggleMateriaT);
containerTheo.addEventListener('click', cliqueForaTheo);



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