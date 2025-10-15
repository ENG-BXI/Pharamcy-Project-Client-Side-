import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from '@/Components/ShadCn/table';
import type {IPurchase} from '../Types/Purchase';

function AllPurchaseTable() {
  const listOfPurchase: IPurchase[] = [
    {
      name: 'بنادول',
      count: 20,
      buyDate: new Date('2025-10-05'),
      price: 150,
      totalPrice: 3000
    },
    {
      name: 'فيتامين سي',
      count: 10,
      buyDate: new Date('2025-09-28'),
      price: 200,
      totalPrice: 2000
    },
    {
      name: 'مطهر ديتول',
      count: 8,
      buyDate: new Date('2025-10-01'),
      price: 350,
      totalPrice: 2800
    },
    {
      name: 'قفازات طبية',
      count: 50,
      buyDate: new Date('2025-09-30'),
      price: 75,
      totalPrice: 3750
    },
    {
      name: 'كمامات طبية',
      count: 100,
      buyDate: new Date('2025-09-29'),
      price: 25,
      totalPrice: 2500
    },
    {
      name: 'مطهر كحول 70%',
      count: 30,
      buyDate: new Date('2025-09-25'),
      price: 120,
      totalPrice: 3600
    },
    {
      name: 'شريط إسعافات أولية',
      count: 15,
      buyDate: new Date('2025-09-22'),
      price: 90,
      totalPrice: 1350
    },
    {
      name: 'مقياس حرارة رقمي',
      count: 5,
      buyDate: new Date('2025-09-20'),
      price: 1000,
      totalPrice: 5000
    },
    {
      name: 'قطن طبي',
      count: 40,
      buyDate: new Date('2025-09-19'),
      price: 60,
      totalPrice: 2400
    },
    {
      name: 'كحول معقم 100 مل',
      count: 60,
      buyDate: new Date('2025-09-18'),
      price: 80,
      totalPrice: 4800
    }
  ];
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className='text-start!'>اسم الدواء</TableHead>
          <TableHead className='text-start!'>الكمية</TableHead>
          <TableHead className='text-start!'>تاريخ الشراء</TableHead>
          <TableHead className='text-start!'>السعر</TableHead>
          <TableHead className='text-start!'>السعر الكلي</TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {listOfPurchase.length === 0 && (
          <TableRow>
            <TableCell colSpan={4}>
              <div className='text-center'>No Purchase Item Found</div>
            </TableCell>
          </TableRow>
        )}
        {listOfPurchase.length > 0 &&
          listOfPurchase.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.count}</TableCell>
              <TableCell>{item.buyDate.toISOString().split('T')[0]}</TableCell>
              <TableCell>{item.price}</TableCell>
              <TableCell>{item.totalPrice}</TableCell>
              <TableCell>X X</TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
}

export default AllPurchaseTable;
