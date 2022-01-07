import React from 'react';
import { useState, useEffect } from 'react';
import { fetchDogById } from '../../services/fetchDogs';
import DogDetailsCard from '../../components/DogDetailsCard/DogDetailsCard';
import './DogDetails.css';

export default function Dogdetails(props) {
  const [dog, setdog] = useState({});
  const [loading, setLoading] = useState(true);
  const id = props.match.params.id;

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDogById(id);
      await setdog(data);
      setLoading(false);
    };
    fetchData();
  }, [id]);
  if (loading) {
    return <div>loading...</div>;
  } else {
    return (
      <div className="dog-detail-page">
        <DogDetailsCard {...dog} />
      </div>
    );
  }
}
