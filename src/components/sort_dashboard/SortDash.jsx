import styles from './sortDash.module.css';
import { useState } from 'react';

function SortDash({ newArr, mergeSort, quickSort, heapSort, selectionSort, bubbleSort }) {
const [elements, setElements] = useState(45)

  return (
    <div className={styles.dashContainer}>
      <button className={styles.newArray} onClick={() => newArr(elements)}>
        Generate New Array
      </button>
      <button className={styles.arraySlider}>
        <label htmlFor="numberOfElements">Array Size
       </label>
       <input type="range" min="15" max="200" id="numberOfElements" value={elements} onChange={(e)=>setElements(e.target.value)}></input>
      
      </button>
      <button onClick={() => mergeSort()}>Merge Sort</button>
      <button onClick={() => quickSort()}>Quick Sort</button>
      <button onClick={() => heapSort()}>Heap Sort</button>
      <button onClick={() => selectionSort()}>Selection Sort</button>
      <button onClick={() => bubbleSort()}>Bubble Sort</button>
    </div>
  );
}

export default SortDash;
