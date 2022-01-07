import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import App from './App';

test('making sure the home page is loading correctly', async () => {
  const { container } = render(
    <MemoryRouter>
      <App />;
    </MemoryRouter>
  );
  await screen.findByText('Meet Amely !');
  expect(container).toMatchSnapshot();
});
