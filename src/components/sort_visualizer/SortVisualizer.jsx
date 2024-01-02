import styles from './sortVisualizer.module.css'
import SortDash from '../sort_dashboard/SortDash'

function SortVisualizer() {

    return (
      <div className={styles.container}>
        <SortDash></SortDash>
      </div>
    )
  }
  
  export default SortVisualizer
  