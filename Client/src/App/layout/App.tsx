import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import HomePage from '../../Components/Home/HomePage';
import { UseStore } from '../Stores/BaseStore';
import './App.css';
import Navbar from './Navbar';

function App() {
  const { UserStore, CommonStore } = UseStore();
  const location = useLocation();

  useEffect(() => {
    if (CommonStore.token) UserStore.getUser();
  }, [UserStore]);

  return (
    <>
      {location.pathname !== "/" && UserStore.IsLogging ?
        <div>
          <Navbar />
          <Outlet />
        </div>
        :
        <HomePage />
      }
    </>
  )
}

export default observer(App)
