import React from 'react';
import { useEffect, useState } from 'react';
import fetchDogs from '../../services/fetchDogs';

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

  return <div>this is the home page</div>;
}
