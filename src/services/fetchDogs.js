import { checkError, client } from './client';

export async function fetchDogs() {
  const response = await client.from('dogs').select('*');
  return checkError(response);
}

export async function fetchDogById(id) {
  const response = await client.from('dogs').select('*').match({ id: id });
  return checkError(response);
}
