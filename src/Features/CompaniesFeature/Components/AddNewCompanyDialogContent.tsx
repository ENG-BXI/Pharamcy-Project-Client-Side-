import CustomButton from '@/Components/CustomButton';
import CustomLabelAndInput from '@/Components/CustomLabelAndInput';
import {DialogContent, DialogHeader, DialogTitle} from '@/Components/ShadCn/dialog';
function AddNewCompanyDialogContent() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle className='text-M-h2 text-center'>اضافة شركة جديدة</DialogTitle>
      </DialogHeader>
      <div className='flex flex-col gap-y-3'>
        <CustomLabelAndInput label='اسم الشركة' />
        <CustomButton className='self-center w-full max-w-70'>اضافة</CustomButton>
      </div>
    </DialogContent>
  );
}
export default AddNewCompanyDialogContent;
