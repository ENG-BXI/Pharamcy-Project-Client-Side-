import type {ISideBatItem} from '../../Types/SIdeBarItem';
import SideBarItem from './SideBarItem';

function AllSideBarItem() {
  const listOfItem: ISideBatItem[] = [
    {
      title: 'الرئيسية',
      path: '/'
    },
    {
      title: 'المشتريات',
      path: '/purchases'
    },
    {
      title: 'المخزون',
      path: '/inventory'
    },
    {
      title: 'المستخدمين',
      path: '/users'
    },
    {
      title: 'الشركات',
      path: '/companies'
    },
    {
      title: 'الديون للشركات',
      path: '/dept-for-companies'
    },
    {
      title: 'الديون للعملاء',
      path: '/dept-of-clients'
    }
  ];
  return (
    <div className='flex flex-col gap-y-2'>
      {listOfItem.length > 0 && listOfItem.map(({title, path}, index) => <SideBarItem title={title} path={path} key={index} />)}
      <SideBarItem title={'تسجيل الخروج'} path={''} />
    </div>
  );
}

export default AllSideBarItem;
