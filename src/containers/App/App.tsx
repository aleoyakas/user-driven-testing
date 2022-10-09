import React, { FC } from 'react';
import Event from '../Event';
import styles from './App.module.css';

const App: FC = () => {
  return (
    <div className={styles.container}>
      <h1>User Driven Testing</h1>
      <Event />
    </div>
  );
}

export default App;
