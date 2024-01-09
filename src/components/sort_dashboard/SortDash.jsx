import styles from './sortDash.module.css';
import { useState } from 'react';

function SortDash({
  newArr,
  mergeSort,
  quickSort,
  heapSort,
  selectionSort,
  bubbleSort,
  changeSpeed
}) {
  const [elements, setElements] = useState(45);
  const [speed, setSpeed] = useState(10);

  return (
    <div className={styles.dashContainer}>
      <div className={styles.controlButtons}>
        {' '}
        <button className={styles.newArray} onClick={() => newArr(elements)}>
          Generate New Array
        </button>
        <button className={styles.arraySlider}>
          <label htmlFor="numberOfElements">Array Size</label>
          <input
            type="range"
            min="15"
            max="200"
            id="numberOfElements"
            value={elements}
            onChange={(e) => setElements(e.target.value)}
          ></input>
        </button>
        <button
          className={styles.changeSpeed}
          onClick={() => changeSpeed(speed)}
        >
          {' '}
          Change Animation Speed
        </button>
        <button className={styles.speedSlider}>
          <label htmlFor="animationDelay">Animation Speed</label>
          <input
            type="range"
            min="5"
            max="50"
            id="animationDelay"
            value={speed}
            onChange={(e) => setSpeed(e.target.value)}
          ></input>
        </button>
      </div>

      <div className={styles.sortButtons}>
        {' '}
        <button onClick={() => mergeSort()}>Merge Sort</button>
        <button onClick={() => quickSort()}>Quick Sort</button>
        <button onClick={() => heapSort()}>Heap Sort</button>
        <button onClick={() => selectionSort()}>Selection Sort</button>
        <button onClick={() => bubbleSort()}>Bubble Sort</button>
      </div>
    </div>
  );
}

export default SortDash;
