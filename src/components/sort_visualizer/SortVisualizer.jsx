import { useState, useEffect } from 'react';
import uniqid from 'uniqid';
import styles from './sortVisualizer.module.css';
import SortDash from '../sort_dashboard/SortDash';
import randomizeArray from '../../randomizeArray';
import mergeSort from '../../sortingAlgorithms/mergeSort';
import quickSort from '../../sortingAlgorithms/quickSort';

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

  //give it a try. if it doesn't work, review what I'm doing with animation push a iteration
  const quick = () => {
    const animations = quickSort(array);
    const intBars = document.getElementsByClassName(`${styles.intBar}`);
    console.log(animations);
    for (let i = 0; i < animations.length; i++) {
      console.log(i)
      const x = animations[i][2];

      if (x !== 0) {
       const barOneIndex = animations[i][0] ;
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
      <SortDash quickSort={quick} mergeSort={merge} newArr={newArr}></SortDash>
    </div>
  );
}

export default SortVisualizer;
