import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from '@/Components/ShadCn/table';
import PopUpAddBuyDrug from './PopUpAddBuyDrug';
import type {IDrugList} from '@/Types/DrugList';
import PopupCheckout from './PopupCheckout';
import SectionTitle from '@/Components/SectionTitle';

function BuyDrugs({list, setListDrug}: {list: IDrugList[]; setListDrug: React.Dispatch<React.SetStateAction<IDrugList[]>>}) {
  const TotalPrice = list.reduce((acc, cu) => acc + cu.TotalPrice, 0);
  return (
    <div className='h-full flex flex-col'>
      <SectionTitle title='الرئيسية' />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className='text-start! font-bold'>اسم الدواء</TableHead>
            <TableHead className='text-start! font-bold'>صنف الدواء</TableHead>
            <TableHead className='text-start! font-bold'>الدفعه</TableHead>
            <TableHead className='text-start! font-bold'>سعر الحبة</TableHead>
            <TableHead className='text-start! font-bold'>الكمية</TableHead>
            <TableHead className='text-start! font-bold'>اجمالي السعر</TableHead>
            <TableHead className='text-start! not-only:font-bold'></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {list.map((item, index) => (
            <TableRow className='' key={index}>
              <TableCell>{item.DrugName}</TableCell>
              <TableCell>{item.CategoryName}</TableCell>
              <TableCell>{item.BatchDate.toISOString().split('T')[0]}</TableCell>
              <TableCell>{item.unitPrice} ريال</TableCell>
              <TableCell>{item.Count}</TableCell>
              <TableCell>{item.TotalPrice} ريال</TableCell>
              <TableCell>
                <div>X X</div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <PopUpAddBuyDrug className={'self-center mt-5 mb-10'} setListDrug={setListDrug} />
      <div className='mt-auto mb-10 flex justify-between'>
        <PopupCheckout />
        <div className='text-M-h3'>الاجمالي : {TotalPrice} ريال</div>
      </div>
    </div>
  );
}

export default BuyDrugs;
