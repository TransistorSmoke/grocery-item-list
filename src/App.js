import { type } from '@testing-library/user-event/dist/type';
import React, { useState } from 'react';
import './App.css';
import AddGroceryItem from './components/AddGroceryItem';
import GroceriesList from './components/GroceriesList';
import Button from './components/UI/Button';

const App = () => {
  const [groceryList, setGroceryList] = useState([]);
  const [totalGroceryAmount, setTotalGroceryAmount] = useState(0);

  const addGroceryItemHandler = (item, price) => {
    setGroceryList((prevGroceryList) => {
      return [
        ...prevGroceryList,
        {
          item,
          price,
          id: Math.random().toString(),
        },
      ];
    });
  };

  const getTotalGroceryAmount = (price) => {
    setTotalGroceryAmount((prevAmount) => (prevAmount += price));
  };

  const clearGroceryList = () => {
    setTotalGroceryAmount(0);
    setGroceryList([]);
    console.log('grocery list cleared');
  };

  return (
    <>
      <AddGroceryItem
        onAddGroceryItem={addGroceryItemHandler}
        onGetGroceryTotal={getTotalGroceryAmount}
      />
      <GroceriesList
        groceryItems={groceryList}
        groceriesTotal={totalGroceryAmount}
        onClearGroceryList={clearGroceryList}
      />
    </>
  );
};

export default App;
