import { useState } from 'react';
import uniqid from 'uniqid';
import styles from './sortVisualizer.module.css';
import SortDash from '../sort_dashboard/SortDash';
import randomizeArray from '../../randomizeArray';

function SortVisualizer() {
  const [array, setArray] = useState(randomizeArray());

  return (
    <div className={styles.container}>
      <div className={styles.arrayContainer}>
        {array.map((el) => (
          <div
          style={{height: (el / 10) +'%'}}
            className={`${styles.intBar} `}
            key={uniqid()}
          ></div>
        ))}
      </div>
      <SortDash></SortDash>
    </div>
  );
}

export default SortVisualizer;
