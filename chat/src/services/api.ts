import axios from "axios";
export const api = {
  post: async (path: string, body: unknown) => {
    const response = await axios.post(
      `${import.meta.env.VITE_API_BASE_URL}:${import.meta.env.VITE_PORT}${path}`,
      body,
    );
    return response;
  },
};
