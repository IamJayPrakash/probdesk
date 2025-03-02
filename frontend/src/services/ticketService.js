import api from "./api";

export const getTickets = async () => {
  const response = await api.get("/tickets");
  return response.data;
};

export const createTicket = async (data) => {
  const response = await api.post("/tickets", data);
  return response.data;
};
