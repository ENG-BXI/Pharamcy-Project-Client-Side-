import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from '@/Components/ShadCn/table';
import {useNavigate} from 'react-router';
import type {IDebtForCompany} from '../Types/IDebtForCompany';
import PayDeptDialog from './PayDeptDialog';
function AddAllDeptOfCompanyTable() {
  const nav = useNavigate();
  const listOfDeptOfCompany: IDebtForCompany[] = [
    {
      name: 'Pfizer',
      price: 150000,
      TypeOfPrice: 'ريال سعودي',
      payPrice: 50000
    },
    {
      name: 'Sanofi',
      price: 120000,
      TypeOfPrice: 'دولار أمريكي',
      payPrice: 80000
    },
    {
      name: 'Jamjoom Pharma',
      price: 9500000,
      TypeOfPrice: 'ريال يمني',
      payPrice: 4000000
    },
    {
      name: 'Hikma Pharmaceuticals',
      price: 200000,
      TypeOfPrice: 'درهم إماراتي',
      payPrice: 150000
    },
    {
      name: 'Yemen Pharma',
      price: 8000000,
      TypeOfPrice: 'ريال يمني',
      payPrice: 3000000
    },
    {
      name: 'Eva Pharma',
      price: 110000,
      TypeOfPrice: 'جنيه مصري',
      payPrice: 70000
    }
  ];
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className='text-start!'>اسم الشركة</TableHead>
          <TableHead className='text-start!'>الدين للشركة</TableHead>
          <TableHead className='text-start!'>المدفوع لها</TableHead>
          <TableHead></TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {listOfDeptOfCompany.length === 0 && <div>No Dept Found</div>}
        {listOfDeptOfCompany.map((item, index) => (
          <TableRow key={index}>
            <TableCell>{item.name}</TableCell>
            <TableCell>
              {item.price} {item.TypeOfPrice}
            </TableCell>
            <TableCell>{item.payPrice}</TableCell>
            <TableCell className='cursor-pointer' onClick={() => nav(`${index}/details`)}>تفاصيل السداد</TableCell>
            <TableCell>
              <PayDeptDialog />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default AddAllDeptOfCompanyTable;
