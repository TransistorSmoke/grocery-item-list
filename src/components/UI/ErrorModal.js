import React from 'react';
import Card from './Card';
import Button from './Button';
import classes from './ErrorModal.module.css';

const ErrorModal = ({ closeModal, title, message }) => {
  return (
    <div className={classes.container}>
      <div className={classes.backdrop} onClick={closeModal}></div>
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h3>{title}</h3>
        </header>
        <p className={classes.message}>{message}</p>
        <footer>
          <Button className={classes.accept} onClick={closeModal}>
            OK
          </Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
