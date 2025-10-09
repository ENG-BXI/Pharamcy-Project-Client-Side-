import SectionTitle from '@/Components/SectionTitle';
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from '@/Components/ShadCn/table';

interface IBatch {
  PaymentDate: Date;
  CreateDate: Date;
  EndDate: Date;
  unitPrice: number;
  count: number;
}
const listOfBatch: IBatch[] = [
  {
    PaymentDate: new Date('2025-01-05'),
    CreateDate: new Date('2024-12-25'),
    EndDate: new Date('2025-01-10'),
    unitPrice: 150,
    count: 10
  },
  {
    PaymentDate: new Date('2025-02-12'),
    CreateDate: new Date('2025-02-01'),
    EndDate: new Date('2025-02-20'),
    unitPrice: 250,
    count: 8
  },
  {
    PaymentDate: new Date('2025-03-18'),
    CreateDate: new Date('2025-03-05'),
    EndDate: new Date('2025-03-25'),
    unitPrice: 300,
    count: 12
  },
  {
    PaymentDate: new Date('2025-04-09'),
    CreateDate: new Date('2025-03-30'),
    EndDate: new Date('2025-04-15'),
    unitPrice: 180,
    count: 15
  },
  {
    PaymentDate: new Date('2025-05-14'),
    CreateDate: new Date('2025-05-01'),
    EndDate: new Date('2025-05-20'),
    unitPrice: 220,
    count: 9
  },
  {
    PaymentDate: new Date('2025-06-10'),
    CreateDate: new Date('2025-06-01'),
    EndDate: new Date('2025-06-18'),
    unitPrice: 400,
    count: 6
  },
  {
    PaymentDate: new Date('2025-07-03'),
    CreateDate: new Date('2025-06-25'),
    EndDate: new Date('2025-07-10'),
    unitPrice: 500,
    count: 5
  },
  {
    PaymentDate: new Date('2025-08-20'),
    CreateDate: new Date('2025-08-10'),
    EndDate: new Date('2025-08-30'),
    unitPrice: 100,
    count: 25
  },
  {
    PaymentDate: new Date('2025-09-15'),
    CreateDate: new Date('2025-09-01'),
    EndDate: new Date('2025-09-25'),
    unitPrice: 350,
    count: 7
  },
  {
    PaymentDate: new Date('2025-10-05'),
    CreateDate: new Date('2025-09-25'),
    EndDate: new Date('2025-10-15'),
    unitPrice: 280,
    count: 11
  }
];
const OneDrugPage = () => {
  return (
    <section className='h-full'>
      <SectionTitle title='تفاصيل  Paracetamol 500mg' />
      <DrugInformation />
      <SectionTitle title='كل الدفع للدواء Paracetamol 500mg' hasButton buttonText='اضافة دفعة' />
      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className='text-start!'>تاريخ الشراء</TableHead>
              <TableHead className='text-start!'>تاريخ الانتاج</TableHead>
              <TableHead className='text-start!'>تاريخ الانتهاء</TableHead>
              <TableHead className='text-start!'>سعر الحبة</TableHead>
              <TableHead className='text-start!'>الكمية</TableHead>
              <TableHead className='text-start!'></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {listOfBatch.length === 0 && <div>No Batch</div>}
            {listOfBatch.length > 0 &&
              listOfBatch.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{item.PaymentDate.toISOString().split('T')[0]}</TableCell>
                  <TableCell>{item.CreateDate.toISOString().split('T')[0]}</TableCell>
                  <TableCell>{item.EndDate.toISOString().split('T')[0]}</TableCell>
                  <TableCell>{item.unitPrice}</TableCell>
                  <TableCell>{item.count}</TableCell>
                  <TableCell>X X</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
};

function DrugInformation() {
  return (
    <div className='flex flex-col gap-y-3 mb-7'>
      <div className='text-xl'>
        <strong>الرقم التسلسلي :</strong> <span>01062665615616</span>
      </div>

      <div className='text-xl'>
        <strong>اسم الدواء :</strong> <span>Paracetamol 500mg</span>
      </div>
      <div className='text-xl'>
        <strong>الصنف :</strong> <span>مسكن ألم/خافض حرارة</span>
      </div>
      <div className='text-xl'>
        <strong>اسم الشركة :</strong> <span>Pfizer</span>
      </div>
    </div>
  );
}
export default OneDrugPage;
