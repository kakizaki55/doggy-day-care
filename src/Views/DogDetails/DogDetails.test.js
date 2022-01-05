import { render, screen } from '@testing-library/react';
import DogDetails from './Dogdetails';
import { MemoryRouter, Route } from 'react-router-dom';

it('span shot test for the home View container', async () => {
  const { container } = await render(
    <MemoryRouter initialEntries={['/dog/11']}>
      <Route exact path="/dog/:id" component={DogDetails}></Route>
    </MemoryRouter>
  );
  await screen.findByText('Meet Happy !');
  expect(container).toMatchSnapshot();
});
