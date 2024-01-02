import styles from './sortDash.module.css'

function SortDash() {

    return (
      <div className={styles.dashContainer}>
        <button className={styles.newArray}> Generate New Array</button>
        <button className={styles.mergeSort}> Merge Sort</button>
      </div>
    )
  }
  
  export default SortDash
  