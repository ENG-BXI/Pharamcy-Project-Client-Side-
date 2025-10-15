import SectionTitle from '@/Components/SectionTitle';
import SearchAndFilter from '@/Features/InventoryFeature/Components/SearchAndFilter';
import AllPurchaseTable from '../Components/AllPurchaseTable';

const PurchaseFeature = () => {
  return (
    <section>
      <SectionTitle title='المشتريات' />
      <SearchAndFilter />
      <AllPurchaseTable />
    </section>
  );
};

export default PurchaseFeature;
