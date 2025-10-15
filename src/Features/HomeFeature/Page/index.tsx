import {useState} from 'react';
import Welcome from '../Components/Welcome';
import type {IDrugList} from '@/Types/DrugList';
import BuyDrugs from '../Components/BuyDrugs';

const HomeFeature = () => {
  const [listDrug, setListDrug] = useState<IDrugList[]>([]);
  return (
    <section className='h-full'>
      {listDrug.length == 0 && <Welcome setListDrug={setListDrug} />}
      {listDrug.length > 0 && <BuyDrugs list={listDrug} setListDrug={setListDrug} />}
    </section>
  );
};

export default HomeFeature;
