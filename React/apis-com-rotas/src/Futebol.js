import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { fetchRodadaData } from './components/api';
import './App.css';

const Futebol = () => {
    const [rodada, setRodada] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [rodadaSelecionada, setRodadaSelecionada] = useState(1); // Estado para a rodada selecionada
  
    // Função para buscar dados da rodada
    const fetchData = async (rodada) => {
      try {
        const data = await fetchRodadaData(rodada); // Passa a rodada selecionada como argumento
        setRodada(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
  
    // Atualiza os dados da rodada quando a rodadaSelecionada muda
    useEffect(() => {
      setLoading(true); // Inicia o carregamento quando a rodada muda
      setError(null);   // Reseta o erro ao mudar a rodada
      fetchData(rodadaSelecionada);
    }, [rodadaSelecionada]);
  
    // Função para lidar com a mudança de rodada no select
    const handleRodadaChange = (event) => {
      setRodadaSelecionada(Number(event.target.value)); // Atualiza a rodada selecionada
    };
  
    if (loading) {
      return <div>Carregando...</div>;
    }
  
    if (error) {
      return <div>Erro: {error}</div>;
    }
  
    // Verifica se a rodada tem partidas antes de renderizar
    if (!rodada || !rodada.partidas || rodada.partidas.length === 0) {
      return <div>Nenhuma partida encontrada para esta rodada.</div>;
    }
  
    return (
      <div className='container'>
        <h1>Selecione a Rodada</h1>
  
        {/* Select para escolher a rodada */}
        <select value={rodadaSelecionada} onChange={handleRodadaChange}>
          {[...Array(38)].map((_, index) => (
            <option key={index + 1} value={index + 1}>
              Rodada {index + 1}
            </option>
          ))}
        </select>
  
        {/* Exibição dos dados da rodada */}
        <h1>{rodada.nome}</h1>
        <h2>Status: {rodada.status}</h2>
  
        <h3>Partidas:</h3>
        <ul>
          {rodada.partidas.map((partida) => (
            <li key={partida.partida_id}>
              <p>
                <strong>
                  {partida.time_mandante && (
                    <>
                      <img 
                        src={partida.time_mandante.escudo} 
                        alt={`Escudo de ${partida.time_mandante.nome_popular}`} 
                        width="30" 
                        style={{ verticalAlign: 'middle', marginRight: '10px' }}
                      />
                      {partida.time_mandante.nome_popular} {partida.placar_mandante}
                    </>
                  )}
                  <span style={{ margin: '0 10px' }}>x</span> 
                  {partida.time_visitante && (
                    <>
                      {partida.placar_visitante} {partida.time_visitante.nome_popular}
                      <img 
                        src={partida.time_visitante.escudo} 
                        alt={`Escudo de ${partida.time_visitante.nome_popular}`} 
                        width="30" 
                        style={{ verticalAlign: 'middle', marginLeft: '10px' }}
                      />
                    </>
                  )}
                </strong>
              </p>
              
              <p>Data: {partida.data_realizacao} às {partida.hora_realizacao}</p>
              <p>Estádio: {partida.estadio?.nome_popular || 'Estádio não informado'}</p>
            </li>
          ))}
        </ul>
        <Link to="/">retornar a página inicial</Link>

      </div>
    );
  };


export default Futebol;