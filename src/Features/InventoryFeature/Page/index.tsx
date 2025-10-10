import SectionTitle from '@/Components/SectionTitle';
import AllDrugTable from '../Components/AllDrugTable';
import SearchAndFilter from '../Components/SearchAndFilter';
import AddNewDrugDialogContent from '../Components/AddNewDrugDialogContent';
const InventoryFeature = () => {
  return (
    <section className='h-full'>
      <SectionTitle title='المخزون' hasButton buttonText='اضافة دواء' isButtonOpenDialog dialogContent={<AddNewDrugDialogContent />} />
      <SearchAndFilter />
      <AllDrugTable />
    </section>
  );
};

export default InventoryFeature;
