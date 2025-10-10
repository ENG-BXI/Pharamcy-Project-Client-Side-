import SectionTitle from '@/Components/SectionTitle';
import AllDrugTable from '../Components/AllDrugTable';
import SearchAndFilter from '../Components/SearchAndFilter';
import {DialogContent, DialogDescription, DialogHeader, DialogTitle} from '@/Components/ShadCn/dialog';
import CustomButton from '@/Components/CustomButton';
import CustomLabelAndInput from '@/Components/CustomLabelAndInput';

const InventoryFeature = () => {
  return (
    <section className='h-full'>
      <SectionTitle title='المخزون' hasButton buttonText='اضافة دواء' isButtonOpenDialog dialogContent={<AddNewDrugDialogContent />} />
      <SearchAndFilter />
      <AllDrugTable />
    </section>
  );
};

function AddNewDrugDialogContent() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle className='text-M-h2 text-center'>اضافة دواء جديد</DialogTitle>
      </DialogHeader>
      <DialogDescription></DialogDescription>
      <div className='flex flex-col gap-y-3 '>
        <CustomLabelAndInput label='الرقم التسلسلي' />
        <CustomLabelAndInput label='اسم الدواء' />
        <CustomLabelAndInput label='الصنف' />
        <CustomLabelAndInput label='الدفعة' />
        <CustomLabelAndInput label='السعر' />
        <CustomLabelAndInput label='الكمية' />
        <CustomButton className='self-center max-w-70 w-full'>اضافة</CustomButton>
      </div>
    </DialogContent>
  );
}
export default InventoryFeature;
