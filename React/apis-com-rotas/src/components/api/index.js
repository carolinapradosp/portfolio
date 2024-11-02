
// Função para buscar os dados da API
export const fetchRodadaData = async (rodadaSelecionada) => {
    const API_URL = `https://api.api-futebol.com.br/v1/campeonatos/10/rodadas/${rodadaSelecionada}`;
    const API_KEY = 'live_56f7d19009e49d4384f900914e0cd3';

    try {
      const response = await fetch(API_URL, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${API_KEY}`,
        },
      });
  
      if (!response.ok) {
        throw new Error(`Erro ao buscar os dados: ${response.statusText}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Erro:', error);
      throw error;
    }
};


// Função para buscar os dados da API Basquete
export const fetchBasquete = async (obj) => {
  const API_URL = `https://basketball-highlights-api.p.rapidapi.com/teams?limit=10`;
  try {
    const response = await fetch(API_URL, {
      method: 'GET',
      headers: {
      "x-rapidapi-key": "48fea6a2d7mshd7f100fda965afbp1941f3jsn834a5a8cc938",
      "x-rapidapi-host": "basketball-highlights-api.p.rapidapi.com"
  },
    });

    if (!response.ok) {
      throw new Error(`Erro ao buscar os dados: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro:', error);
    throw error;
  }
};

