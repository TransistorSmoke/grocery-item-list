import React from 'react';
import Card from './UI/Card';
import Button from './UI/Button';
import classes from './GroceriesList.module.css';
import TotalGroceriesAmount from './TotalGroceriesAmount';

const GroceriesList = (props) => {
  return (
    <>
      <Card className={classes.list}>
        <h1 className={`${classes.title} ${classes.alignCenter}`}>
          Grocery List
        </h1>

        {props.groceryItems.length > 0 ? (
          <>
            <ul>
              {props.groceryItems.map((item) => (
                <li key={item.id} className={classes.listItem}>
                  <p>{item.item}</p>
                  <p>-------------------------------------</p>
                  <p>${parseFloat(item.price).toFixed(2)}</p>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <h5 className={classes.alignCenter}>Add you grocery items</h5>
        )}
      </Card>

      {props.groceryItems.length > 0 ? (
        <>
          <TotalGroceriesAmount total={props.groceriesTotal} />
          <div className={classes.button}>
            <Button
              className={classes.clear}
              onClick={props.onClearGroceryList}
            >
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
