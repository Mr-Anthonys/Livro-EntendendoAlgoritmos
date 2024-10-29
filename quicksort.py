# 1) Base: arrays com 0 e 1 elementos são considerados ordenados
# 2) Caso recursivo
# 3) Subarray de todos os elementos menores do que o pivô
# 4) Subarray de todos os elementos maiores do que o pivô


def quicksort(array):
    if len(array) < 2:
        return array
    else: 
        pivot = array[0]
        menores = [i for i in array[1:] if i <= pivot]
        maiores = [i for i in array[1:] if i > pivot]
        return quicksort(menores) + [pivot] + quicksort(maiores)
    
print(quicksort([10, 5, 2, 3]))