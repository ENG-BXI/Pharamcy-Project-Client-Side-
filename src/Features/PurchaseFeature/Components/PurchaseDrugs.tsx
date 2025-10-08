import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from '@/Components/ShadCn/table';
import PopUpAddBuyDrug from '../Components/PopUpAddBuyDrug';
import type {IDrugList} from '@/Types/DrugList';
import CustomButton from '@/Components/CustomButton';
import {Dialog, DialogContent, DialogDescription, DialogHeader} from '@/Components/ShadCn/dialog';
import {DialogTrigger} from '@radix-ui/react-dialog';
import CustomLabelAndInput from '@/Components/CustomLabelAndInput';

function PurchaseDrugs({list, setListDrug}: {list: IDrugList[]; setListDrug: React.Dispatch<React.SetStateAction<IDrugList[]>>}) {
  const TotalPrice = list.reduce((acc, cu) => acc + cu.TotalPrice, 0);
  return (
    <div className='h-full flex flex-col'>
      <div className='text-D-h4 font-semibold mb-5'>الرئيسية</div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className='text-start! text-lg font-bold'>اسم الدواء</TableHead>
            <TableHead className='text-start! text-lg font-bold'>صنف الدواء</TableHead>
            <TableHead className='text-start! text-lg font-bold'>الدفعه</TableHead>
            <TableHead className='text-start! text-lg font-bold'>سعر الحبة</TableHead>
            <TableHead className='text-start! text-lg font-bold'>الكمية</TableHead>
            <TableHead className='text-start! text-lg font-bold'>اجمالي السعر</TableHead>
            <TableHead className='text-start! text-lg font-bold'></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {list.map((item, index) => (
            <TableRow className='text-lg' key={index}>
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
        <Dialog>
          <DialogTrigger className='w-full max-w-70'>
            <CustomButton className='w-full max-w-70'>دفع</CustomButton>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader className='text-M-h2 text-center!'>دفع الحساب</DialogHeader>
            <DialogDescription></DialogDescription>
            <form className='flex flex-col gap-y-3'>
              <CustomLabelAndIgnput label='الاجمالي' />
              <CustomLabelAndInput label='تم دفع' />
              <CustomLabelAndInput label='المتبقي' />
              <CustomButton className='max-w-70 w-full self-center'>دفع</CustomButton>
            </form>
          </DialogContent>
        </Dialog>
        <div className='text-M-h3'>الاجمالي : {TotalPrice} ريال</div>
      </div>
    </div>
  );
}

export default PurchaseDrugs;
