import React from 'react';
import Card from './Card';
import Button from './Button';
import classes from './ErrorModal.module.css';

const ErrorModal = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.backdrop} onClick={props.closeModal}></div>
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h3>{props.title}</h3>
        </header>
        <p className={classes.message}>{props.message}</p>
        <footer>
          <Button className={classes.accept} onClick={props.closeModal}>
            OK
          </Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
