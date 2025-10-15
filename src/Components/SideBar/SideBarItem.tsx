import {NavLink} from 'react-router';
import type {ISideBarItem} from '../../Types/SIdeBarItem';

function SideBarItem({title, path}: ISideBarItem) {
  return (
    <NavLink to={path} className='side-bar-item flex text-D-p items-center gap-x-2 px-2 py-1 last:absolute last:bottom-10 last:right-7 hover:bg-second/40 rounded-xl'>
      <div className='bg-gray-400 w-7 h-7 rounded-lg'></div>
      {title}
    </NavLink>
  );
}

export default SideBarItem;
