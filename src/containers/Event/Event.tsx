import React, { FC, useState } from 'react';
import purchaseTickets from '../../requests/purchaseTickets';
import joinClasses from '../../utils/joinClasses';
import styles from './Event.module.css';

const Event: FC = () => {
  const [ticketCount, setTicketCount] = useState(0);

  const increaseTicketCount = () =>
    setTicketCount((currentValue) => currentValue + 1);

  const decreaseTicketCount = () =>
    setTicketCount((currentValue) => currentValue - 1);

  const resetTicketCount = () =>
    setTicketCount(0);

  return (
    <div className={styles.container}>
      <h2>Super cool event!</h2>
      <div className={styles.btnGroup}>
        <button 
          onClick={decreaseTicketCount}
          className={joinClasses([styles.btn, styles.btnSecondary])}
        >
          Remove
        </button>
        <p>{ticketCount}</p>
        <button
          onClick={increaseTicketCount}
          className={joinClasses([styles.btn, styles.btnSecondary])}
        >
          Add
        </button>
      </div>
      <div className={styles.btnGroup}>
        <button
          onClick={resetTicketCount}
          className={joinClasses([styles.btn, styles.btnSecondary])}
          aria-disabled={!ticketCount}
        >
          Empty basket
        </button>
        <button
          onClick={() => purchaseTickets(ticketCount)}
          className={joinClasses([styles.btn, styles.btnPrimary])}
        >
          Purchase
        </button>
      </div>
    </div>
  );
}

export default Event;
