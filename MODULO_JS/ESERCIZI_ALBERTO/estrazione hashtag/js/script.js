const testoEl = document.getElementById('testo');
const estraiBtn = document.getElementById('estrai');
const eliminaBtn = document.getElementById('elimina');
const listaEl = document.getElementById('lista');
const countEl = document.getElementById('count');
const risultatoWrapper = document.getElementById('risultato-wrapper');

// Mostra messaggio nessun hashtag...
function mostraNessunHashtag() {
    listaEl.innerHTML = '<em>Nessun hashtag trovato.</em>';
    countEl.textContent = 0;
    risultatoWrapper.classList.remove('nascosto');
}

// Estrazione hashtag
estraiBtn.addEventListener('click', () => {
    const testo = testoEl.value.trim();
    if (!testo) {
        mostraNessunHashtag();
        return;
    }

    const parole = testo.split(/\s+/);
    let hashtags = parole
        .filter(p => p.includes('#'))
        .map(p => p.replace(/[^\p{L}\p{N}_#]/gu, ''))
        .filter(p => p.startsWith('#') && p.length > 1);
    hashtags = [...new Set(hashtags.map(h => h.toLowerCase()))];

    // Mostra i risultati
    listaEl.innerHTML = '';
    if (hashtags.length > 0) {
        countEl.textContent = hashtags.length;
        risultatoWrapper.classList.remove('nascosto');
        hashtags.forEach(tag => {
            const span = document.createElement('span');
            span.className = 'hashtag';
            span.textContent = tag;
            listaEl.appendChild(span);
        });
    } else {
        mostraNessunHashtag();
    }
});

//serve per far estrarre con l'invio della tastiera senza premere il bottone
testoEl.addEventListener('keydown', (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        estraiBtn.click();
    }
});


eliminaBtn.addEventListener('click', () => {
    testoEl.value = "";// svuota la textarea
    mostraNessunHashtag();// mostra il messaggio "nessun hashtag"
});

// Mostra messaggio iniziale
window.addEventListener('load', mostraNessunHashtag);
