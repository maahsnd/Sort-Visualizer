import styles from './sortDash.module.css';

function SortDash({ newArr, mergeSort, quickSort, heapSort, selectionSort }) {
  return (
    <div className={styles.dashContainer}>
      <button className={styles.newArray} onClick={() => newArr()}>
        Generate New Array
      </button>
      <button onClick={() => mergeSort()}>Merge Sort</button>
      <button onClick={() => quickSort()}>Quick Sort</button>
      <button onClick={() => heapSort()}>Heap Sort</button>
      <button onClick={() => selectionSort()}>Selection Sort</button>
    </div>
  );
}

export default SortDash;
