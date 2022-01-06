import React from 'react';
import { useEffect, useState } from 'react';
import { fetchDogs } from '../../services/fetchDogs';
import HomeDogCard from '../../components/HomeDogCard/HomeDogCard';
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDogs();
      setDogs(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <>
        <div>laoding...</div>
      </>
    );
  } else {
    return (
      <div className="dog-list">
        {dogs.map((dog) => (
          <Link key={dog.id} to={`dog/${dog.id}`}>
            <HomeDogCard key={dog.id} {...dog} />
          </Link>
        ))}
      </div>
    );
  }
}
