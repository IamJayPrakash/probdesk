import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import Sidebar from '../components/common/Sidebar';
import DepartmentSummary from '../components/dashboard/DepartmentSummary';
import RecentActivity from '../components/dashboard/RecentActivity';
import TicketStats from '../components/dashboard/TicketStats';
import UserPerformance from '../components/dashboard/UserPerformance';

const Dashboard = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-4">
          <DepartmentSummary />
          <RecentActivity />
          <TicketStats />
          <UserPerformance />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;