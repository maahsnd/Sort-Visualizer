import styles from './sortDash.module.css';

function SortDash({ newArr, mergeSort, quickSort }) {
  return (
    <div className={styles.dashContainer}>
      <button className={styles.newArray} onClick={() => newArr()}>
        Generate New Array
      </button>
      <button className={styles.mergeSort} onClick={() => mergeSort()}>
        Merge Sort
      </button>
      <button className={styles.mergeSort} onClick={() => quickSort()}>
        Quick Sort
      </button>
    </div>
  );
}

export default SortDash;
