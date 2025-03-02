import { useState, useEffect } from 'react';
import api from '../services/api';

export const useTickets = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const fetchTickets = async () => {
      const response = await api.get('/tickets');
      setTickets(response.data);
    };

    fetchTickets();
  }, []);

  return tickets;
};