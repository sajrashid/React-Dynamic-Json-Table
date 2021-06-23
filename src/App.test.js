import { render, screen } from '@testing-library/react';
import App from './App';

test('renders examples link', () => {
  render(<App />);
  const linkElement = screen.getByText(/examples/i);
  expect(linkElement).toBeInTheDocument();
});
