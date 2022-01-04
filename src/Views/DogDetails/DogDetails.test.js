import { render, screen } from '@testing-library/react';
import Dogdetails from './Dogdetails';

it.skip('span shot test for the home View container', async () => {
  const { container } = render(<Dogdetails />);
  await screen.findByText('home');
  expect(container).toMatchSnapshot();
});
