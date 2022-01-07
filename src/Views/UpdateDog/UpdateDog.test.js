import UpdateDog from './UpdateDog';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';

test('makling sure that my update dog is working correctly', async () => {
  const { container } = render(
    <MemoryRouter initialEntries={['/dog/8']}>
      <Route exact path="/dog/:id" component={UpdateDog}></Route>
    </MemoryRouter>
  );
  await screen.findByDisplayValue('Amely');
  expect(container).toMatchSnapshot();
});
