import CustomButton from '@/Components/CustomButton';
import {Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger} from '@/Components/ShadCn/dialog';
import CustomLabelAndInput from '@/Components/CustomLabelAndInput';
import type {IDrugList} from '@/Types/DrugList';

function PopUpAddBuyDrug({setListDrug, className}: {setListDrug: React.Dispatch<React.SetStateAction<IDrugList[]>>; className?: string}) {
  return (
    <Dialog>
      <DialogTrigger className={`max-w-70 w-full ${className}`}>
        <CustomButton className='max-w-70 w-full'>بيع دواء</CustomButton>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className='text-M-h2 text-center'>اضافة دواء جديد</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <form
          onSubmit={e => {
            e.preventDefault();
            setListDrug(pre => [
              ...pre,
              {
                DrugName: 'Paracetamol 500mg',
                CategoryName: 'Pain Relief',
                BatchDate: new Date('2025-03-01'),
                unitPrice: 150,
                Count: 50,
                TotalPrice: 7500
              }
            ]);
          }}
          className='flex flex-col gap-y-3'
        >
          <CustomLabelAndInput isAutofocus label='الرقم التسلسلي' />
          <CustomLabelAndInput label='اسم الدواء' />
          <CustomLabelAndInput label='الصنف' />
          <CustomLabelAndInput label='الدفعة' />
          <CustomLabelAndInput label='السعر' />
          <CustomLabelAndInput label='الكمية' />
          <CustomButton className='max-w-70 w-full self-center'>اضافة</CustomButton>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default PopUpAddBuyDrug;
