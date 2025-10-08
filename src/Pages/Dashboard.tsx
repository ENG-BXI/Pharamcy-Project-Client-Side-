import {Outlet} from 'react-router';
import SideBar from '../Components/SideBar';

const Dashboard = () => {
  return (
    <main className='h-screen w-screen flex'>
      <SideBar />
      <div>
        <Outlet />
      </div>
    </main>
  );
};

export default Dashboard;
