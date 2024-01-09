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
  animations
) {
  if (startIndex === endIndex) return;
  const middleIndex = Math.floor((startIndex + endIndex) / 2);
  mergeSortHelper(auxArray, startIndex, middleIndex, mainArray, animations);
  mergeSortHelper(auxArray, middleIndex + 1, endIndex, mainArray, animations);
  if (startIndex === 0 && endIndex === mainArray.length - 1) {
    doMerge(
      mainArray,
      startIndex,
      middleIndex,
      endIndex,
      auxArray,
      animations,
      1
    );
  } else {
    doMerge(mainArray, startIndex, middleIndex, endIndex, auxArray, animations);
  }
}

function doMerge(
  mainArray,
  startIndex,
  middleIndex,
  endIndex,
  auxArray,
  animations,
  finalCall
) {
  let k = startIndex;
  let i = startIndex;
  let j = middleIndex + 1;

  while (i <= middleIndex && j <= endIndex) {
    if (!finalCall) {
      // Push comparison values to change color
      animations.push([i, j, 1]);
      // Push comparison values to revert to original color
      animations.push([i, j, 2]);
    }

    if (auxArray[i] <= auxArray[j]) {
      // Overwrite value at index k in the original array with the
      // value at index i in the aux array.
      animations.push([k, auxArray[i], 0]);
      if (finalCall) {
        animations.push([k, k, 3]);
      }
      mainArray[k++] = auxArray[i++];
    } else if (auxArray[i] > auxArray[j]) {
      // Overwrite with j instead
      animations.push([k, auxArray[j], 0]);
      if (finalCall) {
        animations.push([k, k, 3]);
      }
      mainArray[k++] = auxArray[j++];
    }
  }
  // Logic mirrors preceding while, simply adjusted to handle i || j, not i && j
  while (i <= middleIndex) {
    if (!finalCall) {
      animations.push([i, i, 1]);
      animations.push([i, i, 2]);
    }

    animations.push([k, auxArray[i], 0]);
    if (finalCall) {
      animations.push([k, k, 3]);
    }
    mainArray[k++] = auxArray[i++];
  }
  while (j <= endIndex) {
    animations.push([j, j, 1]);
    animations.push([j, j, 2]);
    animations.push([k, auxArray[j], 0]);
    if (finalCall) {
      animations.push([k, k, 3]);
    }
    mainArray[k++] = auxArray[j++];
  }
}
