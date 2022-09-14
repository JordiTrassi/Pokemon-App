import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { AppRouter } from './router/AppRouter';
import { AppTheme } from './theme/AppTheme';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppTheme>
      <RouterProvider router={AppRouter} />
    </AppTheme>
  </React.StrictMode>
)
