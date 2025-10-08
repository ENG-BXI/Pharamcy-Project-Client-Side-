import {useState} from 'react';
import Welcome from '../Components/Welcome';
import type { IDrugList } from '@/Types/DrugList';
import PurchaseDrugs from '../Components/PurchaseDrugs';


const PurchaseFeature = () => {
  const [listDrug, setListDrug] = useState<IDrugList[]>([]);
  return (
    <section className='h-full'>
      {listDrug.length == 0 && <Welcome setListDrug={setListDrug} />}
      {listDrug.length > 0 && <PurchaseDrugs list={listDrug} setListDrug={setListDrug} />}
    </section>
  );
};


export default PurchaseFeature;
