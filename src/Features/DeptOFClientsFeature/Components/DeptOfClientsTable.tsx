import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from '@/Components/ShadCn/table';
import {useNavigate} from 'react-router';
import type {IDeptOfClient} from '../Types/DeptOfClient';
function DeptOfClientsTable() {
  const listOfDeptOfClient: IDeptOfClient[] = [
    {
      name: 'Ahmed Ali',
      totalDept: 150000,
      residualPrice: 50000
    },
    {
      name: 'Mona Saleh',
      totalDept: 90000,
      residualPrice: 0
    },
    {
      name: 'Omar Hassan',
      totalDept: 200000,
      residualPrice: 75000
    },
    {
      name: 'Fatima Ahmed',
      totalDept: 120000,
      residualPrice: 20000
    },
    {
      name: 'Ali Al-Mansour',
      totalDept: 300000,
      residualPrice: 150000
    },
    {
      name: 'Huda Khaled',
      totalDept: 85000,
      residualPrice: 10000
    },
    {
      name: 'Yasser Mohammed',
      totalDept: 175000,
      residualPrice: 50000
    }
  ];
  const nav = useNavigate();
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className='text-start!'>اسم العميل</TableHead>
          <TableHead className='text-start!'>اجمالي الدين</TableHead>
          <TableHead className='text-start!'>المتبقي</TableHead>
          <TableHead className='text-start!'></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {listOfDeptOfClient.length === 0 && (
          <TableRow>
            <TableCell colSpan={4}>
              <div className='text-center'>No Dept Found</div>
            </TableCell>
          </TableRow>
        )}
        {listOfDeptOfClient.length > 0 &&
          listOfDeptOfClient.map((item, index) => (
            <TableRow key={index}>
              <TableCell className='cursor-pointer' onClick={() => nav(`${index}/details`)}>
                {item.name}
              </TableCell>
              <TableCell className='cursor-pointer' onClick={() => nav(`${index}/details`)}>
                {item.totalDept}
              </TableCell>
              <TableCell className='cursor-pointer' onClick={() => nav(`${index}/details`)}>
                {item.residualPrice}
              </TableCell>
              <TableCell>X X</TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
}

export default DeptOfClientsTable;
