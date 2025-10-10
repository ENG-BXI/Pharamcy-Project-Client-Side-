import SectionTitle from '@/Components/SectionTitle';
import AllDrugsBankForThisCompany from '../Components/AllDrugsBankForThisCompany';
import AddNewDrugDialogContent from '@/Features/InventoryFeature/Components/AddNewDrugDialogContent';

const OneCompany = () => {
  return (
    <section>
      <SectionTitle title='ادوية شركة AbbVie' hasButton buttonText='اضافة دواء' isButtonOpenDialog dialogContent={<AddNewDrugDialogContent />} />
      <AllDrugsBankForThisCompany />
    </section>
  );
};

export default OneCompany;
