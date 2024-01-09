export default function (array) {
  // Animation schema for quick sort:
  // Animation type indicated by third value in array
  // [index, comparison index/element value, animation type]
  // Animation types-- 0 : swap (element value); 1 : color change (index) ;
  // 2 : color reversion(index), 3: final color
  const animations = [];
  quickSortHelper(array, 0, array.length - 1, animations);
  return animations;
}

function getPivot(low, high) {
  return Math.floor(Math.random() * (high - low + 1)) + low;
}

function quickSortHelper(array, low, high, animations) {
  if (low < high) {
    const pivotIndex = partition(array, low, high, animations);
    quickSortHelper(array, low, pivotIndex - 1, animations);
    quickSortHelper(array, pivotIndex + 1, high, animations);
  }
}

function partition(array, low, high, animations) {
  const pivotIndex = getPivot(low, high);
  const pivot = array[pivotIndex];
  let i = low;
  // Push swap animations (pivot to low index)
  animations.push([pivotIndex, array[low], 0]);
  animations.push([low, array[pivotIndex], 0]);
  animations.push([low, pivotIndex, 1]);
  animations.push([low, pivotIndex, 2]);
  // Swap pivot with the element at index low. ES6 swap threw err, hence use temp
  let temp = array[low];
  array[low] = array[pivotIndex];
  array[pivotIndex] = temp;

  for (let j = low + 1; j <= high; j++) {
    // Push comparison animations (color change)
    animations.push([j, pivotIndex, 1]);
    animations.push([j, pivotIndex, 2]);
    if (array[j] <= pivot) {
      i++;
      if (i !== j) {
        // Push swap animations
        animations.push([j, array[i], 0]);
        animations.push([i, array[j], 0]);
      }
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  // Push swap animations (pivot to sorted position)
  animations.push([i, array[low], 0]);
  animations.push([low, array[i], 0]);
  animations.push([i, i, 3]);
  if (i + 1 <= high) {
    animations.push([i + 1, i + 1, 3]);
  }

  if (i - 1 >= low) {
    animations.push([i - 1, i - 1, 3]);
  }

  // Swap array[low] and array[i] to place the pivot in the correct position
  // ES6 swap threw err, hence use temp
  temp = array[low];
  array[low] = array[i];
  array[i] = temp;

  return i;
}
