import { useState, useEffect } from 'react';
import uniqid from 'uniqid';
import styles from './sortVisualizer.module.css';
import SortDash from '../sort_dashboard/SortDash';
import randomizeArray from '../../randomizeArray';
import mergeSort from '../../sortingAlgorithms/mergeSort';
import quickSort from '../../sortingAlgorithms/quickSort';
import heapSort from '../../sortingAlgorithms/heapSort';

function SortVisualizer() {
  const [array, setArray] = useState([]);

  const newArr = () => {
    setArray(randomizeArray());
  };

  useEffect(() => {
    newArr();
  }, []);

  const merge = () => {
    const animations = mergeSort(array);
    const intBars = document.getElementsByClassName(`${styles.intBar}`);
    for (let i = 0; i < animations.length; i++) {
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIndex, barTwoIndex] = animations[i];
        const barOneStyle = intBars[barOneIndex].style;
        const barTwoStyle = intBars[barTwoIndex].style;
        const color = i % 3 === 0 ? 'teal' : 'pink';
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * 20);
      } else {
        setTimeout(() => {
          const [barOneIndex, newHeight] = animations[i];
          const barOneStyle = intBars[barOneIndex].style;
          barOneStyle.height = `${newHeight / 10}%`;
        }, i * 20);
      }
    }
  };
  const quick = () => {
    const animations = quickSort(array);
    const intBars = document.getElementsByClassName(`${styles.intBar}`);
    for (let i = 0; i < animations.length; i++) {
      const x = animations[i][2];
      if (x !== 0) {
       const barOneIndex = animations[i][0];
       const barTwoIndex = animations[i][1];
        const barOneStyle = intBars[barOneIndex].style;
        const barTwoStyle = intBars[barTwoIndex].style;
        const color = animations[i][2] % 2 === 0 ? 'pink' : 'teal';
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * 20);
      } else {
        setTimeout(() => {
          const [barIndex, newHeight, x] = animations[i];
          const barStyle = intBars[barIndex].style;
          barStyle.height = `${newHeight / 10}%`;
        }, i * 20);
      }
    }
  };

  const heap = () => {
    const animations = heapSort(array);
    const intBars = document.getElementsByClassName(`${styles.intBar}`);
    for (let i = 0; i < animations.length; i++) {
      const x = animations[i][2];
      if (x === 3) {
        const barIndex = animations[i][0];
        const barStyle = intBars[barIndex].style;
        setTimeout(() => {
          barStyle.backgroundColor = 'pink';
        }, i * 20)
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
      } if (x === 0) {
        setTimeout(() => {
          const [barIndex, newHeight, x] = animations[i];
          const barStyle = intBars[barIndex].style;
          barStyle.height = `${newHeight / 10}%`;
        }, i * 20);
      }
    }
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
      <SortDash heapSort={heap} quickSort={quick} mergeSort={merge} newArr={newArr}></SortDash>
    </div>
  );
}

export default SortVisualizer;
