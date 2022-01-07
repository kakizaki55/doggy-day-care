import AddDog from './AddDog.js';
import { render } from '@testing-library/react';

test('making sure the add dog component renders correctly', () => {
  const container = render(<AddDog />);
  expect(container).toMatchSnapshot();
});
