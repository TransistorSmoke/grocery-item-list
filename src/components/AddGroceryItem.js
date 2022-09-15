import React, { useState } from 'react';
import Card from './UI/Card';
import Button from './UI/Button';
import classes from './AddGroceryItem.module.css';
import ErrorModal from './UI/ErrorModal';

const AddGroceryItem = ({ onAddGroceryItem, onGetGroceryTotal }) => {
  const [itemName, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState('');
  const [error, setError] = useState();

  const onAddItem = (event) => {
    event.preventDefault();

    if (itemName.trim().length === 0 || itemPrice.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter an item name and/or quantity.',
      });
      return;
    }

    onAddGroceryItem(itemName, parseFloat(itemPrice));
    onGetGroceryTotal(parseFloat(itemPrice));
    setItemName('');
    setItemPrice('');
  };

  const itemChangeHandler = (event) => {
    setItemName(event.target.value);
  };

  const priceChangeHandler = (event) => {
    setItemPrice(event.target.value);
  };

  const errorNoticeHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          closeModal={errorNoticeHandler}
        ></ErrorModal>
      )}
      <Card className={classes.container}>
        <h1 className={classes.title}>Grocery Form</h1>
        <form onSubmit={onAddItem}>
          <div className={classes.addItemForm}>
            <div className={classes.item}>
              <label htmlFor="item">Item: </label>
              <input
                type="text"
                name="item"
                value={itemName}
                onChange={itemChangeHandler}
              />
            </div>

            <div className={classes.priceQty}>
              <label htmlFor="price">Price($):</label>
              <input
                type="number"
                name="price"
                min="0.01"
                step="0.01"
                value={itemPrice}
                onChange={priceChangeHandler}
              />
            </div>
          </div>

          <Button
            type="submit"
            className={`${classes.buttons} ${classes.submit}`}
          >
            Add Grocery Item
          </Button>
        </form>
      </Card>
    </>
  );
};

export default AddGroceryItem;
