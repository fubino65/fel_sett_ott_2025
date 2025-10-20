const prodottiEl = document.getElementById('prodotti');
const ordinaBtn = document.getElementById('ordina-btn');
const listaOrdinataWrapper = document.getElementById('lista-ordinata');
const listaProdottiEl = document.getElementById('lista-prodotti');
const ordinaSelect = document.getElementById('ordina');

//mostra il messaggio vuoto
function mostraListaVuota() {
    listaProdottiEl.innerHTML = '<em>Nessun prodotto inserito.</em>';
    listaOrdinataWrapper.classList.remove('nascosto');
}


ordinaBtn.addEventListener('click', () => {
    const testo = prodottiEl.value.trim();
    if (!testo) {
        mostraListaVuota();
        return;
    }

    //un prodotto per riga
    let prodotti = testo.split('\n').map(riga => {
        const [nome, prezzo] = riga.split('-').map(s => s.trim());
        return { nome, prezzo: parseFloat(prezzo) || 0 };
    });

    //ordina in base alla scelta 
    const criterio = ordinaSelect.value;
    if (criterio === 'nome') {
        prodotti.sort((a, b) => a.nome.localeCompare(b.nome));
    } else if (criterio === 'prezzo') {
        prodotti.sort((a, b) => a.prezzo - b.prezzo);
    } else if (criterio === 'prezzo-decrescente') {
        prodotti.sort((a, b) => b.prezzo - a.prezzo);
    }

    //mostra i prodotti ordinati
    listaProdottiEl.innerHTML = '';
    prodotti.forEach(p => {
        const span = document.createElement('span');
        span.className = 'hashtag';
        span.textContent = `${p.nome} - €${p.prezzo.toFixed(2)}`;
        listaProdottiEl.appendChild(span);
    });
});
