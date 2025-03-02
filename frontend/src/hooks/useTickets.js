import { useState, useEffect } from "react";
import { getTickets } from "../services/ticketService";

export const useTickets = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    getTickets().then(setTickets);
  }, []);

  return tickets;
};