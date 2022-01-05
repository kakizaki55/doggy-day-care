import { checkError, client } from './client';

export async function updateDogInDataBase(dog) {
  const data = await client.from('dogs').update(dog).eq('id', dog.id);
  return checkError(data);
}
