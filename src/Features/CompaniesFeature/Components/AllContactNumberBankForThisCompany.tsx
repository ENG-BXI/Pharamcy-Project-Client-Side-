import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from '@/Components/ShadCn/table';

function AllContactNumberBankForThisCompany() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className='text-start!'>رقم الهاتف</TableHead>
          <TableHead className='text-start!'>تفاصيل</TableHead>
          <TableHead className='text-start!'></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>776935953</TableCell>
          <TableCell>الدفع الفني للشركة</TableCell>
          <TableCell>X X</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>771111111</TableCell>
          <TableCell>مندوب التوصيل محمد</TableCell>
          <TableCell>X X</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>776935953</TableCell>
          <TableCell>الدفع الفني للشركة</TableCell>
          <TableCell>X X</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
export default AllContactNumberBankForThisCompany;
