export default function (array) {
  const animations = [];
  // Animation schema for heap sort:
  // Animation type indicated by third value in array
  // [index, comparison index/element value, animation type]
  // Animation types-- 0 : swap (element value); 1 : color change for comparison (index) ;
  // 2 : color reversion (index): 3 : final color (index)
  heapSort(array, animations);
  return animations;
  function heapSort(array, animations) {
    const n = array.length;
    // Build heap (rearrange array)
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      heapify(i, n, animations, array);
    }
    for (let i = n - 1; i >= 0; i--) {
      animations.push([i, i, 3])
      swap(0, i, animations, array);
      heapify(0, i, animations, array);
    }
  }

  function swap(i, j, animations, array) {
    animations.push([i, array[j], 0]);
    animations.push([j, array[i], 0]);
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  function heapify(currentIndex, heapSize, animations, array) {
    let minIndex = currentIndex;
    const leftChildIndex = 2 * currentIndex + 1;
    const rightChildIndex = 2 * currentIndex + 2;

    // Don't attempt to animate non-existent indices
    if (leftChildIndex < heapSize) {
        animations.push([leftChildIndex, minIndex, 1]);
        animations.push([leftChildIndex, minIndex, 2]);
    }

    if (leftChildIndex < heapSize && array[leftChildIndex] > array[minIndex]) {
      minIndex = leftChildIndex;
    }

    // Don't attempt to animate non-existent indices
    if (rightChildIndex < heapSize){
        animations.push([rightChildIndex, minIndex, 1]);
        animations.push([rightChildIndex, minIndex, 2]);
    }

    if (rightChildIndex < heapSize && array[rightChildIndex] > array[minIndex]) {
      minIndex = rightChildIndex;
    }

    if (minIndex !== currentIndex) {
      swap(currentIndex, minIndex, animations, array);
      heapify(minIndex, heapSize, animations, array);
    }
  }
}