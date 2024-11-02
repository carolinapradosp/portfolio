import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchBasquete } from './components/api';
import './App.css';

const Basquete = () => {
  const [times, setTimes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchBasquete();
        // Filtra apenas os times que possuem logo
        const timesComLogo = data.data.filter((time) => time.logo !== null);
        setTimes(timesComLogo);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>Erro: {error}</div>;
  }

  return (
    <div>
      <h1>Times de Basquete</h1>
      <ul>
        {times.map((time) => (
          <li key={time.id}>
            <img
              src={time.logo}
              alt={`Logo do time ${time.name}`}
              width="50"
              style={{ verticalAlign: 'middle', marginRight: '10px' }}
            />
            <strong>{time.name}</strong>
          </li>
        ))}
      </ul>
      <Link to="/">retornar à página inicial</Link>
    </div>
  );
};

export default Basquete;
