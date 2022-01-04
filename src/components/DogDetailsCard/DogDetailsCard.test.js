import DogDetailsCard from './DogDetailsCard';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

test('making sure the dog deatils card is reding correctly', async () => {
  const container = await render(
    <BrowserRouter>
      <DogDetailsCard
        name="tommy"
        breed="husky"
        bio="loves evveryone"
        image="https://placedog.net/500?id=6"
        age={3}
      />
    </BrowserRouter>
  );
  expect(container).toMatchSnapshot();
});
