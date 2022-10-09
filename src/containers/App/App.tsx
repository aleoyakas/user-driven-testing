import React, { FC } from 'react';
import Events from '../EventsGroup';
import styles from './App.module.css';

const App: FC = () => {
  return (
    <div className={styles.container}>
      <h1>User Driven Testing</h1>
      <Events />
    </div>
  );
}

export default App;
