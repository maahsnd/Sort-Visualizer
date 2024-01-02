import styles from './sortDash.module.css'

function SortDash({newArr}) {

    return (
      <div className={styles.dashContainer}>
        <button className={styles.newArray} onClick={()=>newArr()}> Generate New Array</button>
        <button className={styles.mergeSort}> Merge Sort</button>
      </div>
    )
  }
  
  export default SortDash
  