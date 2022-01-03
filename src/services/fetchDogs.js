import { checkError, client } from './client';

export default async function fetchDogs() {
  const response = await client.from('dogs').select('*');
  return checkError(response);
}
