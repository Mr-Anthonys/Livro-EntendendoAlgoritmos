function quicksort(array) {
    let menores = []
    let maiores = []
    if (array.lenght < 2) {
        return array;
    } else {
        pivot = array[0]
    for (i of array) {
        if (i <= pivot) {
            menores.push(i);
        } else {
            maiores.push(i);
        }
    }
        //let array2 = [...quicksort(menores), pivot, ...quicksort(maiores)];
        //return array2;
        console.log(menores, maiores, pivot)
    }
    // console.log(`Menor: ${menores} /// pivot: ${[pivot]} /// Maior:  ${maiores}`)
}

quicksort([10, 5, 2, 3])