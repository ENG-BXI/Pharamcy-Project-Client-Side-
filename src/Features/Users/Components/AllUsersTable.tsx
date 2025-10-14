import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from '@/Components/ShadCn/table';
import type { IUser } from '../Types/User';

function AllUsersTable() {
  const listOfUsers: IUser[] = [
    {
      name: 'محمد صالح',
      email: 'mohamed@example.com',
      password: 'mohamed@123',
      role: 'موظف'
    },
    {
      name: 'عمر حسن',
      email: 'omar@example.com',
      password: 'Omar@123',
      role: 'موظف'
    },
    {
      name: 'فاطمة أحمد',
      email: 'fatima@example.com',
      password: 'Fatima@123',
      role: 'موظف'
    },
    {
      name: 'ياسر محمد',
      email: 'yasser@example.com',
      password: 'Yasser@123',
      role: 'مدير'
    },
    {
      name: 'أحلام ناصر',
      email: 'ahlam@example.com',
      password: 'Ahlam@123',
      role: 'موظف'
    }
  ];
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className='text-start!'>اسم المستخدم</TableHead>
          <TableHead className='text-start!'>ايميل المستخدم</TableHead>
          <TableHead className='text-start!'>كلمة السر</TableHead>
          <TableHead className='text-start!'>الصلاحية</TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {listOfUsers.length === 0 && (
          <TableRow>
            <TableCell colSpan={3}>
              <div className='text-center'>No Users Found</div>
            </TableCell>
          </TableRow>
        )}
        {listOfUsers.length > 0 &&
          listOfUsers.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>{item.password}</TableCell>
              <TableCell>{item.role}</TableCell>
              <TableCell>X X</TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
}

export default AllUsersTable;
