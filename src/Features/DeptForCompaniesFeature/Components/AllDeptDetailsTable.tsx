import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from '@/Components/ShadCn/table';
import type {IDeptDetails} from '../Types/IDeptDetails';

function AllDeptDetailsTable() {
  const listOfDeptDetails: IDeptDetails[] = [
    {
      price: 50000,
      typeOfPrice: 'ريال سعودي',
      date: new Date('2025-01-15')
    },
    {
      price: 750000,
      typeOfPrice: 'ريال يمني',
      date: new Date('2025-02-10')
    },
    {
      price: 1200,
      typeOfPrice: 'دولار أمريكي',
      date: new Date('2025-03-05')
    },
    {
      price: 95000,
      typeOfPrice: 'درهم إماراتي',
      date: new Date('2025-03-20')
    },
    {
      price: 60000,
      typeOfPrice: 'جنيه مصري',
      date: new Date('2025-04-02')
    },
    {
      price: 400000,
      typeOfPrice: 'ريال يمني',
      date: new Date('2025-05-18')
    },
    {
      price: 100000,
      typeOfPrice: 'ريال سعودي',
      date: new Date('2025-06-30')
    }
  ];
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className='text-start!'>السعر</TableHead>
          <TableHead className='text-start!'>تاريخ السداد</TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {listOfDeptDetails.length === 0 && <div>No Dept Found</div>}
        {listOfDeptDetails.map((item, index) => (
          <TableRow key={index}>
            <TableCell>
              {item.price} {item.typeOfPrice}
            </TableCell>
            <TableCell>{item.date.toISOString().split('T')[0]}</TableCell>
            <TableCell>X X</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default AllDeptDetailsTable;
