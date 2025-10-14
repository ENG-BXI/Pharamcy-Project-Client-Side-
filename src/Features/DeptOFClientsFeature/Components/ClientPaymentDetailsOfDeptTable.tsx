import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from '@/Components/ShadCn/table';
import type {IPaymentDeptOfClient} from '../Types/PaymentDeptOfClient';

function ClientPaymentDetailsOfDeptTable() {
  const listOfPaymentDeptOfClient: IPaymentDeptOfClient[] = [
    {
      price: 30000,
      date: new Date('2025-01-05')
    },
    {
      price: 45000,
      date: new Date('2025-01-20')
    },
    {
      price: 20000,
      date: new Date('2025-02-10')
    },
    {
      price: 60000,
      date: new Date('2025-03-01')
    },
    {
      price: 35000,
      date: new Date('2025-03-18')
    },
    {
      price: 25000,
      date: new Date('2025-04-07')
    },
    {
      price: 70000,
      date: new Date('2025-05-15')
    }
  ];
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className='text-start!'>المبلغ</TableHead>
          <TableHead className='text-start!'>تاريخ السداد</TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {listOfPaymentDeptOfClient.length === 0 && (
          <TableRow>
            <TableCell colSpan={3}>
              <div className='text-center'>No Dept Payment Details Found</div>
            </TableCell>
          </TableRow>
        )}
        {listOfPaymentDeptOfClient.length > 0 &&
          listOfPaymentDeptOfClient.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.price}</TableCell>
              <TableCell>{item.date.toISOString().split('T')[0]}</TableCell>
              <TableCell>X X</TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
}
export default ClientPaymentDetailsOfDeptTable;
