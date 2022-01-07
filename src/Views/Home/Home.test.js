import Home from './Home';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
test('span shot test for the home View container', async () => {
  const { container } = await render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );
  await screen.findByText('Meet Melba !');
  expect(container).toMatchSnapshot();
});
