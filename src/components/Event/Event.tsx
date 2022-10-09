import React, { FC } from 'react';
import Button from '../Button';
import styles from './Event.module.css';

interface Props {
  eventName: string
  ticketCount: number
  increaseTicketCount: () => void
  decreaseTicketCount: () => void
}

const Event: FC<Props> = ({
  eventName,
  ticketCount,
  increaseTicketCount,
  decreaseTicketCount
}) => {
  return (
    <div className={styles.container}>
      <h2>{eventName}</h2>
      <div className={styles.btnGroup}>
        <Button 
          onClick={decreaseTicketCount}
          variant="secondary"
          isAriaDisabled={ticketCount <= 0}
        >
          Remove
        </Button>
        <p>{ticketCount}</p>
        <Button
          onClick={increaseTicketCount}
          variant="secondary"
        >
          Add
        </Button>
      </div>
    </div>
  );
}

export default Event;
