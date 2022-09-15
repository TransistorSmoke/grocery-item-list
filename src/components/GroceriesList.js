import React from 'react';
import Card from './UI/Card';
import Button from './UI/Button';
import classes from './GroceriesList.module.css';
import TotalGroceriesAmount from './TotalGroceriesAmount';

const GroceriesList = ({
  groceryItems,
  groceriesTotal,
  onClearGroceryList,
}) => {
  return (
    <>
      <Card className={classes.list}>
        <h1 className={`${classes.title} ${classes.alignCenter}`}>
          Grocery List
        </h1>

        {groceryItems.length > 0 ? (
          <>
            <ul>
              {groceryItems.map((item) => (
                <li key={item.id} className={classes.listItem}>
                  <p>{item.item}</p>
                  <p>-------------------------------------</p>
                  <p>${parseFloat(item.price).toFixed(2)}</p>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <h5 className={classes.alignCenter}>Add your grocery items</h5>
        )}
      </Card>

      {groceryItems.length > 0 ? (
        <>
          <TotalGroceriesAmount total={groceriesTotal} />
          <div className={classes.button}>
            <Button className={classes.clear} onClick={onClearGroceryList}>
              Clear Groceries List
            </Button>
          </div>
        </>
      ) : (
        ''
      )}
    </>
  );
};

export default GroceriesList;
