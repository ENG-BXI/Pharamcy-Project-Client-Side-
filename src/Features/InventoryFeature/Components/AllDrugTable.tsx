import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from '@/Components/ShadCn/table';
import type {IDrugListForInventory} from '../Types/IDrugListForInventory';
import { useNavigate } from 'react-router';

function AllDrugTable() {
  const listOfDrug: IDrugListForInventory[] = [
    {
      DrugName: 'Paracetamol 500mg',
      CategoryName: 'Pain Relief',
      CompanyName: 'GlaxoSmithKline',
      unitPrice: 150,
      Count: 50,
      NumberOfBatch: 101
    },
    {
      DrugName: 'Amoxicillin 500mg',
      CategoryName: 'Antibiotic',
      CompanyName: 'Pfizer',
      unitPrice: 200,
      Count: 30,
      NumberOfBatch: 102
    },
    {
      DrugName: 'Ibuprofen 400mg',
      CategoryName: 'Pain Relief',
      CompanyName: 'Bayer',
      unitPrice: 180,
      Count: 40,
      NumberOfBatch: 103
    },
    {
      DrugName: 'Cetirizine 10mg',
      CategoryName: 'Allergy',
      CompanyName: 'Dr. Reddy’s Laboratories',
      unitPrice: 120,
      Count: 60,
      NumberOfBatch: 104
    },
    {
      DrugName: 'Metformin 500mg',
      CategoryName: 'Diabetes',
      CompanyName: 'Sun Pharma',
      unitPrice: 250,
      Count: 25,
      NumberOfBatch: 105
    },
    {
      DrugName: 'Losartan 50mg',
      CategoryName: 'Blood Pressure',
      CompanyName: 'Novartis',
      unitPrice: 300,
      Count: 20,
      NumberOfBatch: 106
    },
    {
      DrugName: 'Omeprazole 20mg',
      CategoryName: 'Stomach Acid',
      CompanyName: 'AstraZeneca',
      unitPrice: 180,
      Count: 45,
      NumberOfBatch: 107
    },
    {
      DrugName: 'Azithromycin 250mg',
      CategoryName: 'Antibiotic',
      CompanyName: 'Cipla',
      unitPrice: 220,
      Count: 35,
      NumberOfBatch: 108
    },
    {
      DrugName: 'Vitamin C 1000mg',
      CategoryName: 'Supplement',
      CompanyName: 'Nature’s Bounty',
      unitPrice: 100,
      Count: 80,
      NumberOfBatch: 109
    },
    {
      DrugName: 'Insulin Glargine 100IU',
      CategoryName: 'Diabetes',
      CompanyName: 'Sanofi',
      unitPrice: 500,
      Count: 15,
      NumberOfBatch: 110
    }
  ];
  const nav = useNavigate();
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className='text-start!'>اسم الدواء</TableHead>
          <TableHead className='text-start!'>صنف الدواء</TableHead>
          <TableHead className='text-start!'>الشركة</TableHead>
          <TableHead className='text-start!'>سعر الحبة</TableHead>
          <TableHead className='text-start!'>الكمية</TableHead>
          <TableHead className='text-start!'>عدد الدفع</TableHead>
          <TableHead className='text-start!'></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {listOfDrug.length === 0 && <div></div>}
        {listOfDrug.length > 0 &&
          listOfDrug.map((item, index) => (
            <TableRow key={index}>
              <TableCell className='cursor-pointer' onClick={()=>{nav(`/inventory/drugs/${index+1}`)}}>{item.DrugName}</TableCell>
              <TableCell className='cursor-pointer' onClick={()=>{nav(`/inventory/drugs/${index+1}`)}}>{item.CategoryName}</TableCell>
              <TableCell className='cursor-pointer' onClick={()=>{nav(`/inventory/drugs/${index+1}`)}}>{item.CompanyName}</TableCell>
              <TableCell className='cursor-pointer' onClick={()=>{nav(`/inventory/drugs/${index+1}`)}}>{item.unitPrice}</TableCell>
              <TableCell className='cursor-pointer' onClick={()=>{nav(`/inventory/drugs/${index+1}`)}}>{item.Count}</TableCell>
              <TableCell className='cursor-pointer' onClick={()=>{nav(`/inventory/drugs/${index+1}`)}}>{item.NumberOfBatch}</TableCell>
              <TableCell>X X</TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
}
export default AllDrugTable;
