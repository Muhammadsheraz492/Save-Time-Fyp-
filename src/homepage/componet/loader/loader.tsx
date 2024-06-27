import React from 'react';
import styles from './loadingDialog.module.css';

const LoadingDialog = () => {


  return (
    <div className={styles.mask}>
      <div className={styles.loader}></div>
    </div>
  );
};

export default LoadingDialog;
