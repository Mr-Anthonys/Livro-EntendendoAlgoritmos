/*
Operadores bit a bit (bitwise)
    & = E,
    | = OU,
    ~ = Negação,
    ^ = Ou Exclusivo (Xor),
    << = Deslocamento à esquerda (shift left),
    >> = Deslocamento à direita (shift right)
*/


/*
Type devolve o tipo da variável ou expressão
    typeof num: Number
    typeof true: boolean
*/


/*
Operador 'delete'
    Deletar a propriedade de um objeto -> let myObj = {name: "Anthony", age: 21}
    delete myObj.age;
    return {name: "Anthony"}
*/


/*
True & False
    Indefinido: false
    Nulo: False
    Booleano: Verdadeiro é tru && Falso é false
    Número: False para +0, -0 ou NaN; caso contrário, será true
    String: False se a string for vazia (tamanho == 0); caso contrário, será true
    Objeto: true
*/
function testTrue(val) {
    return val ? console.log('True') : console.log('false')
};

testTrue("Olá, mundo!") //True
testTrue(new Boolean(false)); //Objeto sempre será true, a não ser que não exista
testTrue(Boolean.age)



/*
Métodos toNumber e toPrimitive são internos e avaliam os alores de acordo com as tabelas a seguir
toNumber();
toPrimitive();

O que são valores primitivos?
    - São dados que não são objetos, como números, strings, booleanos, null e undefined.
*/
const obj2 = {
    [Symbol.toPrimitive](hint) {   //Ele indica como nosso objeto deve se comportar quando o JS tentar transforma-lo para um valor simples (número ou string). -> HINT indica ao JS se deve transformar em uma string ou número
        if (hint == 'number') {  //Se HINT for igual a number, então, retorna como valor numérico e   multiplica com 2: 84.
        // Se não for number ele retornará como string inidicando 'Hello'    
            return 42;
        } else {
            return 'Hello';
        }
    }
};

console.log(obj2 + 2); //Hello2, pois o + em JS concatena
console.log(obj2 * 2); //84, aqui já não concatena e sim multiplica.


let num = 1
console.log((num === 1) ? num-- : num++);



/*
Do While executa pelo menos uma vez e depois verifica a condição

let i = 0
Do {
    console.log(i);
    i++
}While (i < 10);



For é utilizado quando quer percorrer e exibir até certa condição ser true
for (let i = 0; i < 10; i++) {
    console.log(i);
    i++;
}
    //Irá mostrar de 0 à 9, pois é menor que 10 a condição.
*/




            //OBJETOS
/*
    Um objeto é uma instância de uma classe;
        Uma classe define as características de um objeto

        //Também pode-se declarar uma função na definição da classe
*/
function Book(title, page, isbn, livro) {
    this.title = title;
    this.page = page;
    this.isbn = isbn;
    this.livro = function livroNovo() {
        let name = 'Pedra filosofal';
        return name;
    }
}

const book = new Book('Prisioneiro de Azkaban', 320, 'BR');
console.log(book.title);
book.page = 400;
console.log(book.page);
console.log(book.livro)

console.log(`Você está lendo ${book.title}.,
e essa é uma nova linha
e essa também.`)



        //ARROW FUNCTION
//Sem arrow function
let circleArea = function circleArea(r) {
    const PI = 3.14;
    let area = PI * r * r;
    return area;
}


//Com arrow function
let circleArea2 = (r) => 3.14 * r * r;
console.log(`Àrea do circulo: ${circleArea(2)}`)


        //Spread e Rest
//transformar arrays em parâmetros usando a função apply().
//Operador spread(...)

//ECS65
let params = [3, 5, 6]