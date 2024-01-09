export default function (array) {
  const animations = [];
  selectionSort(array, animations);
  return animations;
}

function selectionSort(array, animations) {
  for (let i = 0; i < array.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      animations.push([j, minIndex, 1]);
      animations.push([j, minIndex, 2]);
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      animations.push([minIndex, array[i], 0]);
      animations.push([i, array[minIndex], 0]);
        
        [array[i], array[minIndex]] = [
        array[minIndex],
        array[i]
      ];
    }
    animations.push([i, i, 3])
  }
  animations.push([array.length - 1, array.length - 1, 3])
  return array;
}
