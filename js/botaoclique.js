var DOM = document.getElementById('DOM');
DOM.addEventListener('click', clicar);
DOM.addEventListener('mouseenter', mouseDentro);
DOM.addEventListener('mouseout', mouseFora);

function clicar() {
    const DOM = document.getElementById('DOM');            //se verdadeiro:                 se falso:
    DOM.innerHTML = (DOM.innerHTML === 'Eventos DOM, clique!') ? 'manipulação JS com HTML/CSS' : 'Eventos DOM, clique!';
}

function mouseDentro() {
    DOM.style.background = 'green';
}

function mouseFora() {
    DOM.style.background = '';
}