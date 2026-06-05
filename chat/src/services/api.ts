import axios from "axios";

const API_URL = import.meta.env.VITE_API_BASE_URL as string;
const API_PORT_URL = import.meta.env.PORT as string;

export const api = {
  post: async (path: string, body: unknown) => {
    const response = await axios.post(`${API_URL}:${API_PORT_URL}${path}`, body);
    return response;
  },
};

