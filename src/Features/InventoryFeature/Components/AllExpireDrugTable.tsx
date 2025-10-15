import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from '@/Components/ShadCn/table';
import type {IDrugExpire} from '../Types/DrugExpire';

function AllExpireDrugTable() {
  const listOFExpireDrug: IDrugExpire[] = [
    {
      DrugName: 'بنادول',
      CategoryName: 'مسكنات',
      Company: 'شركة جلف فارما',
      ExpireDate: new Date('2025-11-20'),
      BatchDate: new Date('2023-11-15'),
      Count: 50
    },
    {
      DrugName: 'أوجمنتين',
      CategoryName: 'مضادات حيوية',
      Company: 'شركة جلاكسو سميث كلاين',
      ExpireDate: new Date('2025-12-10'),
      BatchDate: new Date('2024-01-05'),
      Count: 30
    },
    {
      DrugName: 'باراسيتامول',
      CategoryName: 'مسكنات',
      Company: 'شركة سانوفي',
      ExpireDate: new Date('2026-01-15'),
      BatchDate: new Date('2024-02-20'),
      Count: 100
    },
    {
      DrugName: 'اموكسيسيلين',
      CategoryName: 'مضادات حيوية',
      Company: 'شركة الحياة الدوائية',
      ExpireDate: new Date('2025-09-01'),
      BatchDate: new Date('2023-09-20'),
      Count: 75
    },
    {
      DrugName: 'فيتامين سي',
      CategoryName: 'فيتامينات',
      Company: 'شركة فارماتك',
      ExpireDate: new Date('2025-07-25'),
      BatchDate: new Date('2023-07-10'),
      Count: 40
    },
    {
      DrugName: 'سيتريزين',
      CategoryName: 'مضادات حساسية',
      Company: 'شركة الحكمة',
      ExpireDate: new Date('2026-03-10'),
      BatchDate: new Date('2024-03-15'),
      Count: 60
    },
    {
      DrugName: 'ميترونيدازول',
      CategoryName: 'مطهر معوي',
      Company: 'شركة القاهرة للأدوية',
      ExpireDate: new Date('2025-05-18'),
      BatchDate: new Date('2023-05-25'),
      Count: 45
    },
    {
      DrugName: 'إيبوبروفين',
      CategoryName: 'مسكنات ومضادات التهابات',
      Company: 'شركة أبوت',
      ExpireDate: new Date('2026-02-28'),
      BatchDate: new Date('2024-03-01'),
      Count: 90
    }
  ];
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className='text-start!'>اسم الدواء</TableHead>
          <TableHead className='text-start!'>صنف الدواء</TableHead>
          <TableHead className='text-start!'>الشركة</TableHead>
          <TableHead className='text-start!'>تاريخ الانتهاء</TableHead>
          <TableHead className='text-start!'>الدفعه</TableHead>
          <TableHead className='text-start!'>الكمية</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {listOFExpireDrug.length === 0 && (
          <TableRow>
            <TableCell colSpan={6}>
              <div className='text-center'>No Expire Drug Found</div>
            </TableCell>
          </TableRow>
        )}
        {listOFExpireDrug.length > 0 &&
          listOFExpireDrug.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.DrugName}</TableCell>
              <TableCell>{item.CategoryName}</TableCell>
              <TableCell>{item.Company}</TableCell>
              <TableCell>{item.ExpireDate.toISOString().split('T')[0]}</TableCell>
              <TableCell>{item.BatchDate.toISOString().split('T')[0]}</TableCell>
              <TableCell>{item.Count}</TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
}

export default AllExpireDrugTable;
