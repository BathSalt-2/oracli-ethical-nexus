
import React, { useState, useEffect, Suspense } from 'react';
import LoadingScreen from '@/components/LoadingScreen';

const Dashboard = React.lazy(() => import('@/components/dashboard'));

const DashboardPage: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a 5-second loading time for the dashboard to initialize
    const timer = setTimeout(() => setLoading(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LoadingScreen isLoading={loading} />
      {!loading && (
        <Suspense fallback={null}>
          <Dashboard />
        </Suspense>
      )}
    </>
  );
};

export default DashboardPage;
