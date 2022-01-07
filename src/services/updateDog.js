import { checkError, client } from './client';

export async function updateDogInDataBase(dog) {
  const data = await client.from('dogs').update(dog).eq('id', dog.id);
  return checkError(data);
}

export async function addDogToDataBase(dog) {
  const data = await client.from('dogs').insert(dog);
  return checkError(data);
}

export async function deleteDogById(dog) {
  const data = await client.from('dogs').delete().match({ id: dog.id });
  return checkError(data);
}
