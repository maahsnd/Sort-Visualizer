export default function (array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxArray, animations);
    return animations;
  }
  
  function mergeSortHelper(
    mainArray,
    startIndex,
    endIndex,
    auxArray,
    animations,
  ) {
    if (startIndex === endIndex) return;
    const middleIndex = Math.floor((startIndex + endIndex) / 2);
    mergeSortHelper(auxArray, startIndex, middleIndex, mainArray, animations);
    mergeSortHelper(auxArray, middleIndex + 1, endIndex, mainArray, animations);
    doMerge(mainArray, startIndex, middleIndex, endIndex, auxArray, animations);
  }
  
  function doMerge(
    mainArray,
    startIndex,
    middleIndex,
    endIndex,
    auxArray,
    animations,
  ) {
    let k = startIndex;
    let i = startIndex;
    let j = middleIndex + 1;
    while (i <= middleIndex && j <= endIndex) {
      // Push comparison values to change color
      animations.push([i, j]);
      // Push comparison values to revert to original color
      animations.push([i, j]);
      if (auxArray[i] <= auxArray[j]) {
        // Overwrite value at index k in the original array with the
        // value at index i in the aux array.
        animations.push([k, auxArray[i]]);
        mainArray[k++] = auxArray[i++];
      } else {
        // Overwrite with j instead
        animations.push([k, auxArray[j]]);
        mainArray[k++] = auxArray[j++];
      }
    }
    // Logic mirrors preceding while, simply adjusted to handle i || j, not i && j
    while (i <= middleIndex) {
      animations.push([i, i]);
      animations.push([i, i]);
      animations.push([k, auxArray[i]]);
      mainArray[k++] = auxArray[i++];
    }
    while (j <= endIndex) {
      animations.push([j, j]);
      animations.push([j, j]);
      animations.push([k, auxArray[j]]);
      mainArray[k++] = auxArray[j++];
    }
  }