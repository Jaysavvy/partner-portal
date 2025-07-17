import React from 'react';
import { createHashRouter, RouterProvider } from 'react-router-dom';

// Import your existing components
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import ContactsList from './pages/ContactsList';
import CompaniesList from './pages/CompaniesList';
import DealsList from './pages/DealsList';

// Import your CSS
import './styles/app.css';

const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Dashboard />
      },
      {
        path: "contacts",
        element: <ContactsList />
      },
      {
        path: "companies",
        element: <CompaniesList />
      },
      {
        path: "deals",
        element: <DealsList />
      }
    ]
  }
]);

export default function CRMAppIsland() {
  return (
    <RouterProvider router={router} />
  );
}