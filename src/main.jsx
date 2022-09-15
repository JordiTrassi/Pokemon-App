import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { AppRouter } from './router/AppRouter';
import { AppTheme } from './theme/AppTheme';
import { Provider } from 'react-redux';
import { store } from './store';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <AppTheme>
        <RouterProvider router={AppRouter} />
      </AppTheme>
    </Provider>
  </React.StrictMode>
)
