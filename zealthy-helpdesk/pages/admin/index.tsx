import Header from '@/components/Header';
import Head from 'next/head';
import TicketList from '@/components/admin/TicketList';

export default function Home() {
  return (
    <>
      <Head>
        <title>Help Desk - Admin Portal</title>
      </Head>
      <Header currentView='admin'/>
      <main>
        <div className="bg-gray-200 border rounded-sm">
          <h2>View all tickets:</h2>
          <TicketList />
        </div>
      </main>
    </>
  );
}
