import React, { FC, useState } from 'react';
import purchaseTickets from '../../requests/purchaseTickets';
import Button from '../../components/Button';
import Event from '../../components/Event';
import styles from './Events.module.css';

const Events: FC = () => {
  const ticketCountInit = {
    superCoolEvent: 0,
    anotherAmazingEvent: 0,
  }
  const [ticketCount, setTicketCount] = useState<Record<string, number>>(ticketCountInit);
  
  const totalTicketCount = Object.values(ticketCount)
    .reduce((total, current) => total + current, 0);

  const increaseTicketCount = (eventKey: string) => () =>
  setTicketCount((currentValue) => ({
    ...currentValue,
    [eventKey]: currentValue[eventKey] + 1,
  }));

  const decreaseTicketCount = (eventKey: string) => () => {
    if (ticketCount[eventKey] > 0) {
      setTicketCount((currentValue) => ({
        ...currentValue,
        [eventKey]: currentValue[eventKey] - 1,
      }));
    };
  };

  const resetTicketCount = () =>
    setTicketCount(ticketCountInit);

  return (
    <div className={styles.container}>
      <Event
        eventName="Super Cool Event!"
        ticketCount={ticketCount.superCoolEvent}
        increaseTicketCount={increaseTicketCount('superCoolEvent')}
        decreaseTicketCount={decreaseTicketCount('superCoolEvent')}
      />
      
      <div className={styles.btnGroup}>
        <Button
          onClick={resetTicketCount}
          isAriaDisabled={totalTicketCount <= 0}
          variant="secondary"
        >
          Empty basket
        </Button>
        <Button
          onClick={() => purchaseTickets(totalTicketCount)}
          variant="primary"
        >
          Purchase
        </Button>
      </div>
    </div>
  );
}

export default Events;
