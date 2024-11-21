import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import store from './app/store'; 
import './index.css';
import { createBrowserRouter } from 'react-router-dom';
import Root from './components/Root';
import ShoeList from './components/ShoeList';
import Payment from './components/Payment';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,  
    children: [
      {
        index: true,
        path: "",  
        element: <ShoeList />,
      },
      {
        path: "payment", 
        element: <Payment />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
);