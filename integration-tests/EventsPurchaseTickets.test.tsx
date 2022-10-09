import React from 'react';
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import App from '../containers/App';
import purchaseTickets from '../requests/purchaseTickets';

jest.mock('../../requests/purchaseTickets');
const purchaseTicketsMock = purchaseTickets as jest.Mock;

beforeEach(() => {
  purchaseTicketsMock.mockReset();
});

describe('Event', () => {
  test('Event loads correctly', () => {
    render(<App />);

    expect(screen.getByRole('heading', { name: /User Driven Testing/i })).toBeVisible();
    expect(screen.getByRole('heading', { name: /Super cool event!/i })).toBeVisible();
    expect(screen.getByRole('button', { name: /Remove/i })).toBeVisible();
    expect(screen.getByRole('button', { name: /Add/i })).toBeVisible();
    expect(screen.getByRole('button', { name: /Empty basket/i })).toBeVisible();
    expect(screen.getByRole('button', { name: /Purchase/i })).toBeVisible();
  });

  test('tickets can be added', () => {
    render(<App />);

    const addBtn = screen.getByRole('button', { name: /Add/i });
    const ticketTotal = screen.getByText('0');

    user.click(addBtn);
    expect(ticketTotal).toHaveTextContent('1');

    user.click(addBtn);
    expect(ticketTotal).toHaveTextContent('2');
  });

  test('tickets can be reduced down to 0', () => {
    render(<App />);

    const addBtn = screen.getByRole('button', { name: /Add/i });
    const removeBtn = screen.getByRole('button', { name: /Remove/i });
    const ticketTotal = screen.getByText('0');

    user.click(addBtn);
    expect(ticketTotal).toHaveTextContent('1');

    user.click(removeBtn);
    expect(ticketTotal).toHaveTextContent('0');

    user.click(removeBtn);
    expect(ticketTotal).toHaveTextContent('0');
  });

  test('empty basket button sets ticket count to 0', () => {
    render(<App />);

    const addBtn = screen.getByRole('button', { name: /Add/i });
    const emptyBasketBtn = screen.getByRole('button', { name: /Empty basket/i });
    const ticketTotal = screen.getByText('0');

    user.click(addBtn);
    expect(ticketTotal).toHaveTextContent('1');

    user.click(addBtn);
    expect(ticketTotal).toHaveTextContent('2');

    user.click(emptyBasketBtn);
    expect(ticketTotal).toHaveTextContent('0');
  });

  test('purchase button calls purchaseTickets', () => {
    render(<App />);

    const addBtn = screen.getByRole('button', { name: /Add/i });
    const purchaseBtn = screen.getByRole('button', { name: /Purchase/i });
    const ticketTotal = screen.getByText('0');

    user.click(addBtn);
    expect(ticketTotal).toHaveTextContent('1');

    user.click(addBtn);
    expect(ticketTotal).toHaveTextContent('2');

    user.click(purchaseBtn);
    expect(purchaseTicketsMock).toHaveBeenCalledWith(2);
  });
});
