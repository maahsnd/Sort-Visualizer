import { useState, useEffect } from 'react';
import uniqid from 'uniqid';
import styles from './sortVisualizer.module.css';
import SortDash from '../sort_dashboard/SortDash';
import randomizeArray from '../../randomizeArray';
import mergeSort from '../../sortingAlgorithms/mergeSort';

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
    for (let i = 0; i < animations.length; i++) {
      const intBars = document.getElementsByClassName(`${styles.intBar}`);
      console.log(intBars)
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
          barOneStyle.height = `${newHeight}px`;
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
      <SortDash mergeSort={merge} newArr={newArr}></SortDash>
    </div>
  );
}

export default SortVisualizer;
