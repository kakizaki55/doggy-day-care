import React from 'react';
import { useState } from 'react/cjs/react.development';
import UpdateDogFrom from '../../components/UpdateDogFrom/UpdateDogForm';
export default function AddDog() {
  const [dog, setDog] = useState({});
  const [loading, setLoading] = useState(true);

  const handelSubmit = (e) => {
    e.preventDefault();
    console.log('admin button pressed');
  };

  return (
    <>
      <UpdateDogFrom dog={''} handelSubmit={handelSubmit} />
    </>
  );
}
