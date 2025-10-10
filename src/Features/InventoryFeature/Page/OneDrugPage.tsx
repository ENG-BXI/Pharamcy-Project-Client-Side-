import SectionTitle from '@/Components/SectionTitle';
import AllBatchForThisDrug from '../Components/AllBatchForThisDrug';
import DrugInformation from '../Components/DrugInformation';
import AddNewBatchDialogContent from '../Components/AddNewBatchDialogContent';

const OneDrugPage = () => {
  return (
    <section className='h-full'>
      <SectionTitle title='تفاصيل  Paracetamol 500mg' />
      <DrugInformation />
      <SectionTitle title='كل الدفع للدواء Paracetamol 500mg' hasButton buttonText='اضافة دفعة' isButtonOpenDialog dialogContent={<AddNewBatchDialogContent />} />
      <AllBatchForThisDrug />
    </section>
  );
};

export default OneDrugPage;
