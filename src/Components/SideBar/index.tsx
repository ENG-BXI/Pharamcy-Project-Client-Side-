import AllSideBarItem from './AllSideBarItem';
import SideBarLogo from './SideBarLogo';

const SideBar = () => {
  return (
    <aside className='relative h-full w-65 py-7 px-5 bg-primary text-white'>
      <SideBarLogo />
      <AllSideBarItem />
    </aside>
  );
};

export default SideBar;
