export function getMergeSortAnimations(array) {
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
      // These are the values that we're comparing; we push them once
      // to change their color.
      animations.push([i, j]);
      // These are the values that we're comparing; we push them a second
      // time to revert their color.
      animations.push([i, j]);
      if (auxArray[i] <= auxArray[j]) {
        // We overwrite the value at index k in the original array with the
        // value at index i in the aux array.
        animations.push([k, auxArray[i]]);
        mainArray[k++] = auxArray[i++];
      } else {
        // We overwrite the value at index k in the original array with the
        // value at index j in the aux array.
        animations.push([k, auxArray[j]]);
        mainArray[k++] = auxArray[j++];
      }
    }
    while (i <= middleIndex) {
      // These are the values that we're comparing; we push them once
      // to change their color.
      animations.push([i, i]);
      // These are the values that we're comparing; we push them a second
      // time to revert their color.
      animations.push([i, i]);
      // We overwrite the value at index k in the original array with the
      // value at index i in the aux array.
      animations.push([k, auxArray[i]]);
      mainArray[k++] = auxArray[i++];
    }
    while (j <= endIndex) {
      // These are the values that we're comparing; we push them once
      // to change their color.
      animations.push([j, j]);
      // These are the values that we're comparing; we push them a second
      // time to revert their color.
      animations.push([j, j]);
      // We overwrite the value at index k in the original array with the
      // value at index j in the aux array.
      animations.push([k, auxArray[j]]);
      mainArray[k++] = auxArray[j++];
    }
  }