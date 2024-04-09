import { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';
import TicketItem from './TicketItem';

export default function TicketList() {
  const [tickets, setTickets] = useState([]);
  const [activeHiddenId, setActiveHiddenId] = useState(null);

  useEffect(() => {
    getTickets();
  }, []);

  async function getTickets() {
    try {
      const { data } = await axios.get(`/api/tickets`);
      console.log(data);
      setTickets(data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error((error as AxiosError).response);
      } else {
        console.error(error);
      }
    }
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Ticket ID</th>
            <th>Last Updated</th>
            <th>Name</th>
            <th>Summary</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {tickets.map((ticket, index) => (
            <TicketItem
              ticket={ticket}
              key={index}
              activeHiddenId={activeHiddenId}
              setActiveHiddenId={setActiveHiddenId}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}