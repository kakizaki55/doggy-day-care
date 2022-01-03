import React from 'react';
import { useEffect, useState } from 'react';
import fetchDogs from '../../services/fetchDogs';

import HomeDogCard from '../../components/HomeDogCard/HomeDogCard';

export default function Home() {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDogs();
      setDogs(data);
    };
    fetchData();
  }, []);
  console.log(dogs);

  return (
    <>
      {dogs.map((dog) => (
        <HomeDogCard key={dog.id} {...dog} />
      ))}
    </>
  );
}
