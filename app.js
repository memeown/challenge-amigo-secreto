let amigos = [];

function adicionarAmigo() {
    let nomeAmigo = document.getElementById('amigo');
    let nome = nomeAmigo.value.trim();

    if (nome === '') {
        alert("Informe o nome do amigo(a)!");
        return;
    }

    if (amigos.includes(nome)) {
        alert("Esse nome já foi adicionado!");
        return;
    }

    amigos.push(nome);
    nomeAmigo.value = "";
    atualizarListaDeAmigos();
}

function atualizarListaDeAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

    amigos.forEach((amigo) => {
        let item = document.createElement('li');
        item.textContent = amigo;
        lista.appendChild(item);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos dois amigos para sortear!");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>Amigo Sorteado: ${amigoSorteado}!!!</li>`;
}
