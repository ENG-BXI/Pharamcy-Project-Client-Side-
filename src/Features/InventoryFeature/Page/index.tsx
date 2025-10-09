import SectionTitle from '@/Components/SectionTitle';
import AllDrugTable from '../Components/AllDrugTable';
import SearchAndFilter from '../Components/SearchAndFilter';

const InventoryFeature = () => {
  return (
    <section className='h-full'>
      <SectionTitle title='المخزون' hasButton buttonText='اضافة دواء' />
      <SearchAndFilter />
      <AllDrugTable />
    </section>
  );
};

export default InventoryFeature;
