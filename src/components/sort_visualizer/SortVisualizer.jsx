import { useState, useEffect } from 'react';
import uniqid from 'uniqid';
import styles from './sortVisualizer.module.css';
import SortDash from '../sort_dashboard/SortDash';
import randomizeArray from '../../randomizeArray';
import mergeSort from '../../sortingAlgorithms/mergeSort';
import quickSort from '../../sortingAlgorithms/quickSort';
import heapSort from '../../sortingAlgorithms/heapSort';
import selectionSort from '../../sortingAlgorithms/selectionSort';
import bubbleSort from '../../sortingAlgorithms/bubbleSort';

function SortVisualizer() {
  const [array, setArray] = useState([]);

  const newArr = (length) => {
    setArray(randomizeArray(length));
  };

  useEffect(() => {
    newArr(40);
  }, []);

  // Process animation arrays that use a [x, x, 0-3] to indicate
  // animation type
  const animateThreeVal = (animations) => {
    const intBars = document.getElementsByClassName(`${styles.intBar}`);
    for (let i = 0; i < animations.length; i++) {
      const x = animations[i][2];
      if (x === 3) {
        const barIndex = animations[i][0];
        const barStyle = intBars[barIndex].style;
        setTimeout(() => {
          barStyle.backgroundColor = 'pink';
        }, i * 20);
      }
      if (x === 1 || x === 2) {
        const barOneIndex = animations[i][0];
        const barTwoIndex = animations[i][1];
        const barOneStyle = intBars[barOneIndex].style;
        const barTwoStyle = intBars[barTwoIndex].style;
        const color = animations[i][2] % 2 === 0 ? 'skyblue' : 'teal';
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * 20);
      }
      if (x === 0) {
        setTimeout(() => {
          const [barIndex, newHeight, x] = animations[i];
          const barStyle = intBars[barIndex].style;
          barStyle.height = `${newHeight / 10}%`;
        }, i * 20);
      }
    }
  };
  const quick = () => {
    const animations = quickSort(array);
    animateThreeVal(animations);
  };

  const heap = () => {
    const animations = heapSort(array);
    animateThreeVal(animations);
  };
  const merge = () => {
    const animations = mergeSort(array);
    animateThreeVal(animations);
  };

  const selection = () => {
    const animations = selectionSort(array);
    animateThreeVal(animations);
  };

  const bubble = ()  => {
    const animations = bubbleSort(array);
    animateThreeVal(animations)
  }

  return (
    <div className={styles.container}>
      <div className={styles.arrayContainer}>
        {array.map((el) => (
          <div
            style={{ height: el / 10 + '%' }}
            className={`${styles.intBar} `}
            key={uniqid()}
          ></div>
        ))}
      </div>
      <SortDash
        selectionSort={selection}
        heapSort={heap}
        quickSort={quick}
        mergeSort={merge}
        newArr={newArr}
        bubbleSort={bubble}
      ></SortDash>
    </div>
  );
}

export default SortVisualizer;
