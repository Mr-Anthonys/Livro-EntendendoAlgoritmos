const pesquisa_binaria = function(lista, item) {
    baixo = 0;
    alto =  (lista.length) - 1;

    while (baixo <= alto) {
        meio = Math.floor((baixo + alto) / 2);
        chute = lista[meio];

        if (chute == item) {
            return meio;
        }else if (chute > item) {
            alto = meio - 1
        }else {
            baixo = meio + 1
        }
    }
}
let minha_lista = [0, 1, 2, 3, 4, 5, 6, 8, 7, 9, 10]
console.log(`Meu resultado: ${pesquisa_binaria(minha_lista, 4)}`)