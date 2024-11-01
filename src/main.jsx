import { StrictMode } from 'react'
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx'

import './styles/tailwind.css'

import AboutMePage from './pages/AboutMePage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import PortfolioPage from './pages/PortfolioPage.jsx';
import ResumePage from './pages/ResumePage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <AboutMePage />,
      },
      {
        path: '/Contact',
        element: <ContactPage />,
      },
      {
        path: '/Portfolio',
        element: <PortfolioPage />,
      },
      {
        path: '/Resume',
        element: <ResumePage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>
);