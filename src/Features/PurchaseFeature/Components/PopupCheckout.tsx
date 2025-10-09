import CustomButton from '@/Components/CustomButton';
import {Dialog, DialogContent, DialogDescription, DialogHeader} from '@/Components/ShadCn/dialog';
import {DialogTrigger} from '@radix-ui/react-dialog';
import CustomLabelAndInput from '@/Components/CustomLabelAndInput';

function PopupCheckout() {

  return (
    <Dialog>
      <DialogTrigger className='w-full max-w-70'>
        <CustomButton className='w-full max-w-70'>دفع</CustomButton>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className='text-M-h2 text-center!'>دفع الحساب</DialogHeader>
        <DialogDescription></DialogDescription>
        <form className='flex flex-col gap-y-3'>
          <CustomLabelAndInput label='الاجمالي' />
          <CustomLabelAndInput label='تم دفع' />
          <CustomLabelAndInput label='المتبقي' />
          <CustomButton className='max-w-70 w-full self-center'>دفع</CustomButton>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default PopupCheckout;
