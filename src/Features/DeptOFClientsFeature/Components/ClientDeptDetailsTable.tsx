import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from '@/Components/ShadCn/table';
import {useNavigate, useParams} from 'react-router';
import PaymentDeptOfClientDialog from '../Components/PaymentDeptOfClientDialog';
import type {IDeptClientDetails} from '../Types/DeptClientDetails';
function ClientDeptDetailsTable() {
  const listOfDeptOfClientDetails: IDeptClientDetails[] = [
    {
      salary: 50000,
      date: new Date('2025-01-10'),
      note: 'الدفعة الأولى من الدين'
    },
    {
      salary: 30000,
      date: new Date('2025-02-05'),
      note: 'دفعة جزئية بعد الاتفاق'
    },
    {
      salary: 20000,
      date: new Date('2025-03-01')
    },
    {
      salary: 100000,
      date: new Date('2025-03-25'),
      note: 'تسديد كامل للدين المتبقي'
    },
    {
      salary: 45000,
      date: new Date('2025-04-15'),
      note: 'دفعة نقدية من العميل في الصيدلية'
    },
    {
      salary: 60000,
      date: new Date('2025-05-12')
    }
  ];
  const nav = useNavigate();
  const {id} = useParams();
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className='text-start!'>السعر</TableHead>
          <TableHead className='text-start!'>تاريخ الدين</TableHead>
          <TableHead className='text-start!'>ملاحظات</TableHead>
          <TableHead></TableHead>
          <TableHead></TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {listOfDeptOfClientDetails.length === 0 && (
          <TableRow>
            <TableCell colSpan={4}>
              <div className='text-center'>No Dept Details Found</div>
            </TableCell>
          </TableRow>
        )}
        {listOfDeptOfClientDetails.length > 0 &&
          listOfDeptOfClientDetails.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.salary}</TableCell>
              <TableCell>{item.date.toISOString().split('T')[0]}</TableCell>
              <TableCell>{item.note ?? 'لاتوجد ملاحظات'}</TableCell>
              <TableCell className='cursor-pointer' onClick={() => nav(`/dept-of-clients/${id}/payment-details/${index}`)}>
                تفاصيل السداد
              </TableCell>
              <TableCell>
                <PaymentDeptOfClientDialog />
              </TableCell>
              <TableCell>X X</TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
}

export default ClientDeptDetailsTable;
