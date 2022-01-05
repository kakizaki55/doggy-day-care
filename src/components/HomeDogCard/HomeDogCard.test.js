import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import HomeDogCard from './HomeDogCard';
test('making sure the home dog card renders correctly', async () => {
  const container = await render(
    <BrowserRouter>
      <HomeDogCard age={11} bio="a sweet shiny boy" breed="french bull" id={11} name="happy" />
    </BrowserRouter>
  );
  expect(container).toMatchSnapshot();
});
