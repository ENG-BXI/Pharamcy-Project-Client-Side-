import {Outlet} from 'react-router';
import SideBar from '../Components/SideBar';
import Header from '../Components/Header';

const Dashboard = () => {
  return (
    <main className='max-h-screen w-screen flex'>
      <SideBar />
      <div className='h-screen max-h-screen overflow-y-scroll flex flex-col w-full px-5'>
        <Header />
        <div className='flex-grow-1'>
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
