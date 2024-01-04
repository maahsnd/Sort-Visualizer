export default function () {
  //this works, but the graphics do not update. Also, I don't understand why it works
  function getPivot(low, high) {
    return Math.floor(Math.random() * (high - low + 1)) + low;
  }

  function quicksort(array, low = 0, high = array.length - 1) {
    if (low < high) {
      const pivotIndex = partition(array, low, high);
      quicksort(array, low, pivotIndex - 1);
      quicksort(array, pivotIndex + 1, high);
    }
  }

  function partition(array, low, high) {
    const pivotIndex = getPivot(low, high);
    const pivot = array[pivotIndex];
    let i = low;

    // Swap pivot with the element at index low
    [array[low], array[pivotIndex]] = [array[pivotIndex], array[low]];
    for (let j = low + 1; j <= high; j++) {
      if (array[j] <= pivot) {
        i++;
        [array[i], array[j]] = [array[j], array[i]];
      }
    }

    // Swap array[low] and array[i] to place the pivot in the correct position
    [array[low], array[i]] = [array[i], array[low]];
    return i;
  }

  quicksort(array);
  return array;
}
