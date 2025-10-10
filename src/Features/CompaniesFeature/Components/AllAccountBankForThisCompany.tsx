import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from '@/Components/ShadCn/table';

function AllAccountBankForThisCompany() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className='text-start!'>اسم البنك</TableHead>
          <TableHead className='text-start!'>رقم الحساب</TableHead>
          <TableHead className='text-start!'></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>العمقي</TableCell>
          <TableCell>2501651</TableCell>
          <TableCell>X X</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>البسيري</TableCell>
          <TableCell>2056315</TableCell>
          <TableCell>X X</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>بن دول</TableCell>
          <TableCell>2505656</TableCell>
          <TableCell>X X</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
export default AllAccountBankForThisCompany;
