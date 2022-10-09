import { render, screen } from '@testing-library/react';
import App from '.';

describe('App', () => {
  test('App loads correctly', () => {
    const { container } = render(<App />);

    expect(screen.getByRole('heading', { name: /User Driven Testing/i })).toBeVisible();
    expect(container.firstChild.children.length).toBe(2);
  });
});
