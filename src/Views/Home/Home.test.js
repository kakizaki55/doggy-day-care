import Home from './Home';
import { render, screen } from '@testing-library/react';

it.skip('span shot test for the home View container', async () => {
  const { container } = render(<Home />);
  await screen.findByText('home');
  expect(container).toMatchSnapshot();
});
