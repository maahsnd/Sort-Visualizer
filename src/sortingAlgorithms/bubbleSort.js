export default function (array) {
  const animations = [];
  bubbleSort(array, animations);
  return animations;

  function bubbleSort(array, animations) {
    const len = array.length;

    for (let i = 0; i < len - 1; i++) {
      for (let j = 0; j < len - 1 - i; j++) {
        animations.push([j, j + 1, 1]);
        animations.push([j, j + 1, 2]);
        if (array[j] > array[j + 1]) {
          // Swap elements if they are in the wrong order
          animations.push([j, array[j + 1], 0]);
          animations.push([j + 1, array[j], 0]);
          let temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
        }
      }
      // Animate 'bubbled up' value
      animations.push([len - 1 - i, i, 3]);
    }
    // animate first value in array, which loop does not catch
    animations.push([0, 0, 3]);

    return array;
  }
}
