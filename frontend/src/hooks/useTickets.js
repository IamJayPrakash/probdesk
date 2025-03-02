import { useState, useEffect } from "react";
import { getTickets } from "../services/ticketService";

const useTickets = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    getTickets().then(setTickets);
  }, []);

  return tickets;
};

export default useTickets;
