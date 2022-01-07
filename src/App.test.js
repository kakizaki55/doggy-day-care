import { render, screen } from '@testing-library/react';
import App from './App';

test('making sure the home page is laoding correctly', () => {
  render(<App />);
  const linkElement = screen.findByText('');
  expect(linkElement).toBeInTheDocument();
});
