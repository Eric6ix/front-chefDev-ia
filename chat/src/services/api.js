import axios from "axios";
const API_URL = import.meta.env.VITE_API_BASE_URL;
const API_PORT_URL = import.meta.env.PORT

export const api = async (pergunta) => {
  try {
    const response = await axios.post(`${API_URL}:${API_PORT_URL}/perguntar`, {
      pergunta,
    });
    return response.data.resposta;
  } catch (error) {
    console.error("Erro ao fazer a pergunta:", error);
    throw error;
  }
};
