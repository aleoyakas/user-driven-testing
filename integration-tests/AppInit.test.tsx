import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../src/containers/App';

describe('App', () => {
  test('App loads correctly', () => {
    render(<App />);

    expect(screen.getByRole('heading', { name: /User Driven Testing/i })).toBeVisible();
    expect(screen.getByRole('heading', { name: /Super cool event!/i })).toBeVisible();
    expect(screen.getByRole('button', { name: /Remove/i })).toBeVisible();
    expect(screen.getByRole('button', { name: /Add/i })).toBeVisible();
    expect(screen.getByRole('button', { name: /Empty basket/i })).toBeVisible();
    expect(screen.getByRole('button', { name: /Purchase/i })).toBeVisible();
  });
});
