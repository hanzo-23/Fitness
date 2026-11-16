import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the main fitness navigation', () => {
  render(<App />);

  expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /workouts plans/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /meal plans/i })).toBeInTheDocument();
});
