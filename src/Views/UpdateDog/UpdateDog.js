import React from 'react';
import { useEffect, useState } from 'react';
import { fetchDogById } from '../../services/fetchDogs';
import UpdateDogFrom from '../../components/UpdateDogFrom/UpdateDogForm';
import { deleteDogById, updateDogInDataBase } from '../../services/updateDog';
import { useHistory, useParams } from 'react-router-dom';
import './UpdateDog.css';

export default function UpdateDog(props) {
  const [dog, setDog] = useState({});
  const [loading, setLoading] = useState(true);
  const history = useHistory();
  const [message, setMessage] = useState('');
  const params = useParams();

  const id = props.match.params.id;

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDogById(id);
      setDog(data);
      setLoading(false);
    };
    fetchData();
  }, [id]);

  const updateDog = (key, value) => {
    dog[key] = value;
    setDog({ ...dog });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await updateDogInDataBase(dog);
      setMessage('your dog was updated!');
      setTimeout(() => {
        history.push(`/dog/${data[0].id}`);
      }, 3000);
    } catch {
      setMessage('looks like somthing went wrong!');
    }
  };
  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      await deleteDogById(dog);
      setMessage('dog deleted succesfully');
      setTimeout(() => {
        history.push(`/`);
      }, 3000);
    } catch {
      setMessage('oops, looks like we couldnt checkout that dog');
    }
  };

  return loading ? (
    <>loading...</>
  ) : (
    <div className="update-dog">
      <span>{message}</span>
      <UpdateDogFrom
        isUpdating={params.id}
        dog={dog}
        updateDog={updateDog}
        handleSubmit={handleSubmit}
        handleDelete={handleDelete}
      />
    </div>
  );
}
