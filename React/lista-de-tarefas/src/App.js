import React, { useState, useEffect } from 'react';
import './App.css';

function Mochila() {
  const [nome, setNome] = useState('');
  const [itemEmEdicao, setItemEmEdicao] = useState(null); // Estado para armazenar o item em edição
  const [itens, setItens] = useState(() => {
    const itensSalvos = JSON.parse(localStorage.getItem('mochilaItens'));
    return itensSalvos || [];
  });

  // Salvar os itens no localStorage sempre que houver uma atualização nos itens
  useEffect(() => {
    if (itens.length > 0) {
      localStorage.setItem('mochilaItens', JSON.stringify(itens));
    }
  }, [itens]);

  // Função para adicionar ou salvar um item (se estiver editando ou não)
  const adicionarOuSalvarItem = () => {
    if (nome) {
      if (itemEmEdicao) {
        // Atualizar o item em vez de adicionar um novo
        const itensAtualizados = itens.map((item) =>
          item.id === itemEmEdicao ? { ...item, nome } : item
        );
        setItens(itensAtualizados);
        setItemEmEdicao(null); // Limpar o estado de edição
      } else {
        const novoItem = { nome, id: Date.now(), concluido: false };
        setItens([...itens, novoItem]);
      }
      setNome(''); // Limpar o campo de input
    }
  };

  // Função para excluir um item
  const excluirItem = (id) => {
    const itensAtualizados = itens.filter((item) => item.id !== id);
    setItens(itensAtualizados);
  };

  // Função para editar um item
  const editarItem = (id) => {
    const itemParaEditar = itens.find((item) => item.id === id);
    setNome(itemParaEditar.nome);
    setItemEmEdicao(id); // Armazenar o ID do item que está sendo editado
  };

  // Função para marcar como concluído
  const marcarConcluido = (id) => {
    const itensAtualizados = itens.map((item) =>
      item.id === id ? { ...item, concluido: !item.concluido } : item
    );
    setItens(itensAtualizados);
  };

  return (
    <div className='container'>
      <h1>Lista de tarefas</h1>
      <div className='form'>
        <input
          type="text"
          placeholder="Tarefa"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className='input'
        />
        <button onClick={adicionarOuSalvarItem} className='button'>
          {itemEmEdicao ? 'Salvar' : 'Adicionar'}
        </button>
      </div>

      <ul className='resultado'>
        {itens.map((item) => (
          <li key={item.id}>
            <div style={item.concluido ? styles.concluido : {}}>
              {item.nome}
            </div>
            <div className='buttons-container'>
            <button onClick={() => marcarConcluido(item.id)} className='concluir'>
              {item.concluido ? 'Desmarcar' : 'Concluir'}
            </button>
            <button onClick={() => editarItem(item.id)} className='editar'>Editar</button>
            <button onClick={() => excluirItem(item.id)} className='excluir'>Excluir</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  concluido: {
    textDecoration: 'line-through',
    color: 'gray',
  },
};

export default Mochila;
