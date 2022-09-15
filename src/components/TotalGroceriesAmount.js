import React from 'react';
import classes from './TotalGroceriesAmount.module.css';

const TotalGroceriesAmount = (props) => {
  return (
    <div className={classes.container}>
      <h3 className={classes.totalText}>TOTAL:</h3>

      <h3 className={classes.totalAmount}>
        ${props.total ? parseFloat(props.total).toFixed(2) : 0.0}
      </h3>
    </div>
  );
};

export default TotalGroceriesAmount;
