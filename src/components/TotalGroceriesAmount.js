import React from 'react';
import classes from './TotalGroceriesAmount.module.css';

const TotalGroceriesAmount = ({ total }) => {
  return (
    <div className={classes.container}>
      <h3 className={classes.totalText}>TOTAL:</h3>

      <h3 className={classes.totalAmount}>
        ${total ? parseFloat(total).toFixed(2) : 0.0}
      </h3>
    </div>
  );
};

export default TotalGroceriesAmount;
